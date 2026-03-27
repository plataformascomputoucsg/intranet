/**
 * Genera un slug URL-friendly a partir de un título y un código.
 * Buenas prácticas aplicadas:
 * - Convierte a minúsculas
 * - Remueve acentos y caracteres especiales
 * - Reemplaza espacios con guiones
 * - Elimina guiones múltiples consecutivos
 * - Agrega el código al final para garantizar unicidad
 *
 * @example
 * generateSlug("Taller interactivo de Inglés y Francés", 571)
 * // Returns: "taller-interactivo-de-ingles-y-frances-571"
 */
export function generateSlug(titulo: string, codigo: number): string {
  const normalized = titulo
    .toLowerCase()
    // Remueve acentos y diacríticos
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    // Reemplaza caracteres no alfanuméricos con guiones
    .replace(/[^a-z0-9\s-]/g, '')
    // Reemplaza espacios con guiones
    .replace(/\s+/g, '-')
    // Elimina guiones múltiples
    .replace(/-+/g, '-')
    // Elimina guiones al inicio y final
    .replace(/^-|-$/g, '');

  return `${normalized}-${codigo}`;
}

/**
 * Extrae el código numérico del final de un slug.
 * El código siempre está después del último guión.
 *
 * @example
 * extractCodigoFromSlug("taller-interactivo-571")
 * // Returns: 571
 */
export function extractCodigoFromSlug(slug: string): number | null {
  const parts = slug.split('-');
  const lastPart = parts[parts.length - 1];
  const codigo = parseInt(lastPart, 10);

  return isNaN(codigo) ? null : codigo;
}

/**
 * Normaliza y valida una URL de imagen proveniente de la API.
 * Si la URL es relativa, le antepone el dominio base (si es necesario).
 * Si la URL es nula o inválida, retorna undefined para que el fallback actúe.
 */
export function normalizeImageSrc(src?: string | null): string | undefined {
  if (!src || src.trim() === '') return undefined;

  // Si ya es una URL completa (http/https), la dejamos como está
  if (src.startsWith('http')) return src;

  // Si es una ruta relativa que empieza con /, podríamos necesitar el host de la API.
  // Por ahora, asumimos que Next.js la resuelve si está configurado el remotePattern,
  // pero lo ideal sería centralizar el dominio si las imágenes vienen de un storage externo.
  // Ej: return `${process.env.NEXT_PUBLIC_API_URL}${src}`;

  return src;
}

/**
 * Formatea una fecha ISO a formato legible en español.
 * Soporta múltiples formatos de salida.
 *
 * @example
 * formatDate("2026-02-05T05:00:00.000+00:00")
 * // Returns: "5 feb 2026"
 *
 * formatDate("2026-02-05T05:00:00.000+00:00", "long")
 * // Returns: "5 de febrero de 2026"
 */
export function formatDate(dateString: string, format: 'short' | 'long' = 'short'): string {
  try {
    const [year, month, day] = dateString.split('T')[0].split('-').map(Number);
    const date = new Date(year, month - 1, day);

    if (format === 'long') {
      return date.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
    }

    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  } catch {
    return dateString;
  }
}

/**
 * Trunca un texto a un número máximo de caracteres.
 *
 * @example
 * truncateText("Lorem ipsum dolor sit amet", 15)
 * // Returns: "Lorem ipsum..."
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}
