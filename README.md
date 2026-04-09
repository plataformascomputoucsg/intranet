# UCSG Intranet — Frontend

Portal interno de la Universidad Católica Santiago de Guayaquil. Construido con **Next.js 16 (App Router)**, **TailwindCSS v4** y **HeroUI**.

---

## Tabla de contenidos

- [Stack tecnológico](#stack-tecnológico)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Páginas implementadas](#páginas-implementadas)
- [Arquitectura y patrones](#arquitectura-y-patrones)
- [Variables de entorno](#variables-de-entorno)
- [Instalación y desarrollo](#instalación-y-desarrollo)
- [Cómo hacer un commit](#cómo-hacer-un-commit)
- [Despliegue](#despliegue)
- [Docker](#docker)

---

## Stack tecnológico

| Herramienta            | Versión | Rol                                    |
| ---------------------- | ------- | -------------------------------------- |
| Next.js                | 16      | Framework principal (App Router + RSC) |
| React                  | 19      | UI library                             |
| TypeScript             | 5       | Tipado estático                        |
| TailwindCSS            | 4       | Estilos utilitarios                    |
| HeroUI                 | 2.x     | Componentes de UI                      |
| Framer Motion          | 12      | Animaciones                            |
| Swiper                 | 12      | Carousels / sliders                    |
| Lucide React           | latest  | Íconos                                 |
| Poppins (Google Fonts) | —       | Tipografía principal                   |
| pnpm                   | —       | Package manager                        |

**Herramientas de calidad de código:**

| Herramienta | Propósito                           |
| ----------- | ----------------------------------- |
| ESLint      | Linting estático                    |
| Prettier    | Formateo de código                  |
| Husky       | Git hooks                           |
| lint-staged | Lint/format solo en archivos staged |
| commitlint  | Validación del mensaje de commit    |

---

## Estructura del proyecto

```
src/
├── app/
│   ├── (intranet)/              # Route group — layout con Header, Nav y Footer
│   │   ├── layout.tsx           # Layout principal de la intranet
│   │   ├── page.tsx             # Homepage (Social + News + Events + Birthdays)
│   │   ├── noticias/
│   │   │   ├── page.tsx         # Listado de noticias
│   │   │   └── [slug]/          # Detalle de noticia
│   │   ├── eventos/
│   │   │   ├── page.tsx         # Listado de eventos
│   │   │   └── [slug]/          # Detalle de evento
│   │   ├── galeria/
│   │   │   ├── page.tsx         # Galería fotográfica
│   │   │   └── [slug]/          # Álbum específico
│   │   ├── cumpleanios/
│   │   │   └── page.tsx         # Cumpleaños del mes
│   │   ├── contacto/
│   │   │   ├── page.tsx         # Directorio de contactos
│   │   │   └── ContactClient.tsx
│   │   └── acerca/
│   │       └── page.tsx         # Información institucional
│   ├── actions/
│   │   └── contact.ts           # Server Actions
│   ├── components/
│   │   ├── layout/              # TopBar, Header, NavBar, Footer, WaveBackground
│   │   ├── news/                # Todos los componentes de noticias
│   │   ├── events/              # Todos los componentes de eventos
│   │   ├── birthday/            # Widget y calendario de cumpleaños
│   │   ├── gallery/             # Galería fotográfica
│   │   ├── social/              # Feed de Instagram
│   │   ├── directory/           # Directorio de contactos
│   │   ├── ui/                  # Componentes UI reutilizables
│   │   └── shared/              # AppImage y utilidades compartidas
│   ├── hooks/
│   │   └── useEdgeDetector.js   # Detección de borde para scroll
│   ├── lib/
│   │   ├── api.ts               # Todas las llamadas al backend
│   │   └── utils.ts             # Utilidades generales
│   ├── types/                   # Tipos TypeScript por dominio
│   ├── layout.tsx               # Root layout (fuente, providers)
│   ├── globals.css              # Estilos globales + variables CSS
│   └── providers.tsx            # Providers de HeroUI / ThemeProvider
├── components/
│   └── shared/
│       └── AppImage.tsx         # Wrapper de next/image con fallback
├── hooks/
│   └── useContactFilter.ts      # Hook de filtro para el directorio
└── types/
    └── directory.ts             # Tipos del directorio de contactos
```

---

## Páginas implementadas

### `/` — Homepage

Tres columnas:

- **Izquierda**: Feed de Instagram / redes sociales
- **Centro**: Sección de noticias destacadas
- **Derecha**: Próximos eventos + widget de cumpleaños del día

### `/noticias` — Noticias

Listado de comunicaciones institucionales con layout de hero + grilla. Cada noticia tiene su página de detalle en `/noticias/[slug]`.

### `/eventos` — Eventos

Próximos eventos institucionales con tarjeta hero y listado. Detalle en `/eventos/[slug]`.

### `/galeria` — Galería

Álbumes fotográficos de eventos pasados. Cada álbum tiene su página de detalle con carrusel de imágenes en `/galeria/[slug]`.

### `/cumpleanios` — Cumpleaños

Calendario mensual con los cumpleaños del personal. Agrupados por día con cards individuales.

### `/contacto` — Directorio de contactos

Directorio de contactos institucionales con búsqueda y filtros por área. Implementado con Client Component para interactividad.

### `/acerca` — Acerca de la UCSG

Información institucional de la universidad.

---

## Arquitectura y patrones

### Server Components por defecto

Todas las páginas y la mayoría de los componentes son **React Server Components (RSC)**. Los datos se obtienen directamente en el servidor usando `fetch` con ISR de Next.js. Solo se usa `'use client'` cuando se necesita interactividad real (filtros, estado local, efectos).

### ISR — Incremental Static Regeneration

Las llamadas a la API usan `{ next: { revalidate: 60 } }` para regenerar el cache cada 60 segundos. Se utilizan **cache tags** para invalidación on-demand:

```ts
// src/app/lib/api.ts
fetch(url, {
  next: {
    revalidate: 60,
    tags: ['comunicaciones', `comunicaciones-${tipoEvento}-${seccion}`],
  },
});
```

### Skeleton Loading

Cada sección pesada tiene su propio componente `*Skeleton.tsx` que se muestra con `<Suspense>` mientras cargan los datos del servidor. Nunca se usa un spinner global.

```tsx
<Suspense fallback={<NewsSkeleton />}>
  <NewsContent />
</Suspense>
```

### Route Groups

Se usa el route group `(intranet)` para aplicar el layout con `TopBar`, `Header`, `NavBar` y `Footer` a todas las páginas de la intranet, sin que el nombre del grupo aparezca en la URL.

### Separación Server / Client

El patrón es consistente en todo el proyecto:

- `*Section.tsx` → Server Component, obtiene datos
- `*Content.tsx` → Server Component, renderiza con datos
- `*Client.tsx` → Client Component, maneja interactividad
- `*Skeleton.tsx` → Skeleton de carga

---

## Variables de entorno

Crear un archivo `.env` en la raíz basado en el siguiente esquema:

```env
# URL del backend (privada — solo servidor)
API_URL=http://localhost:8080

# URLs públicas (quemadas en el build, disponibles en el cliente)
NEXT_PUBLIC_MESA_AYUDA_URL=https://...
NEXT_PUBLIC_SERVICIOS_ADMIN_URL=https://...
NEXT_PUBLIC_SIU_URL=https://...
NEXT_PUBLIC_GESTOR_DOCUMENTAL_URL=https://...
```

> **Importante:** Las variables `NEXT_PUBLIC_*` se queman en el bundle en tiempo de build. Las variables sin ese prefijo solo están disponibles en el servidor.

---

## Instalación y desarrollo

### Requisitos

- Node.js >= 20
- pnpm >= 9

### Instalar dependencias

```bash
pnpm install
```

### Servidor de desarrollo

```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

### Linting y formateo

```bash
# Correr ESLint
pnpm lint

# Formatear con Prettier
pnpm format

# Verificar formato sin modificar
pnpm format:check
```

---

## Cómo hacer un commit

Este proyecto tiene **commit hooks** configurados con Husky + commitlint. Todos los commits deben seguir la especificación [Conventional Commits](https://www.conventionalcommits.org/).

Si el mensaje no cumple el formato, **el commit es rechazado automáticamente**.

### Formato

```
<tipo>(<scope opcional>): <descripción en minúsculas>
```

### Tipos permitidos

| Tipo       | Cuándo usarlo                                          |
| ---------- | ------------------------------------------------------ |
| `feat`     | Nueva funcionalidad                                    |
| `fix`      | Corrección de un bug                                   |
| `docs`     | Cambios en documentación                               |
| `style`    | Formato, espacios, punto y coma (sin cambio de lógica) |
| `refactor` | Refactorización sin agregar feat ni fix                |
| `perf`     | Mejora de performance                                  |
| `test`     | Agregar o modificar tests                              |
| `chore`    | Mantenimiento, actualización de dependencias           |
| `ci`       | Cambios en configuración de CI/CD                      |
| `revert`   | Revertir un commit anterior                            |

### Reglas adicionales

- La descripción debe ir en **minúsculas** (`lower-case`)
- Máximo **72 caracteres** en el subject
- Máximo **100 caracteres** por línea en el body

### Ejemplos válidos

```bash
# Nueva funcionalidad
git commit -m "feat(noticias): agregar paginación en el listado"

# Bug fix
git commit -m "fix(galeria): corregir error de carga de imágenes en safari"

# Refactor
git commit -m "refactor(api): extraer lógica de cache a función utilitaria"

# Dependencias
git commit -m "chore: actualizar heroui a v2.8.5"

# Documentación
git commit -m "docs: actualizar readme con guía de commits"
```

### Ejemplos inválidos ❌

```bash
# Sin tipo
git commit -m "arreglé el bug del header"

# Descripción en mayúsculas
git commit -m "fix: Corregir NavBar"

# Tipo no permitido
git commit -m "update: nueva sección"
```

### Flujo completo

```bash
# 1. Stagear los archivos
git add .

# 2. Hacer el commit (Husky ejecuta lint-staged + commitlint automáticamente)
git commit -m "feat(eventos): agregar filtro por categoría"

# 3. Push
git push origin <rama>
```

> **¿Qué pasa en el pre-commit?**
> Antes de guardar el commit, Husky ejecuta `lint-staged`, que corre ESLint y Prettier únicamente sobre los archivos que están en staging. Si hay errores de lint que no se pueden auto-corregir, el commit también es rechazado.

---

## Despliegue

### Deploy manual

El script `deploy` en `package.json` hace push a main y luego ejecuta el despliegue en el servidor vía SSH:

```bash
pnpm deploy
```

Este comando:

1. Hace `git push origin main`
2. Se conecta al servidor por SSH
3. Actualiza el código del frontend y backend
4. Ejecuta `docker compose up -d --build`
5. Limpia imágenes Docker obsoletas

### CI/CD con GitHub Actions

El workflow `.github/workflows/deploy.yml` se activa automáticamente en cada push a `main`:

1. **Build**: Construye la imagen Docker con las variables públicas como `build-args`
2. **Push**: Sube la imagen a GitHub Container Registry (`ghcr.io`)
3. **Deploy**: Se conecta al servidor vía SSH, hace `docker compose pull` y levanta los contenedores

---

## Docker

El proyecto incluye `Dockerfile` y `docker-compose.yml` para producción.

```bash
# Construir y levantar en local
docker compose up -d --build

# Ver logs
docker compose logs -f next-app
```

### Variables en Docker

- Las variables `NEXT_PUBLIC_*` se pasan como `build-args` (se queman en build time)
- Las variables privadas como `API_URL` se pasan como `env_file` en runtime

```yaml
# docker-compose.yml
build:
  args:
    NEXT_PUBLIC_MESA_AYUDA_URL: ${NEXT_PUBLIC_MESA_AYUDA_URL}
env_file:
  - .env
```

El contenedor expone el puerto `3000` y tiene configurado `extra_hosts` para resolver el hostname `intranet` a la IP de la red interna.
