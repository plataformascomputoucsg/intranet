'use server';

/**
 * Solicitud de cambio o desbloqueo de contraseña del SIU.
 *
 * Reemplaza al flujo PHP legacy (formulario.htm -> cambio.php -> respuesta.php).
 * El backend expone:
 *
 *   POST {API_URL}/api/siu/cambio-clave
 *   Body: { "usuario": "nombre.apellido" }
 *
 *   Respuestas:
 *   - 200 { empleado, email, mensaje } -> clave temporal generada y enviada
 *   - 400                              -> usuario con formato inválido
 *   - 404 { mensaje }                  -> usuario no existe o sin correo institucional
 *   - 429                              -> solicitudes repetidas muy seguidas
 *
 * Todo el trabajo en Oracle lo hace el procedimiento SSB_KG_POLITICAS.SSB_PR_ENVIA_MAIL_SIU.
 */

export interface CambioClaveState {
  status: 'idle' | 'success' | 'error';
  empleado?: string;
  email?: string;
  message?: string;
}

// Usuario del SIU: segmentos alfanuméricos separados por punto (jhonny.tomala).
const USUARIO_REGEX = /^[a-z0-9]+(\.[a-z0-9]+)*$/;

export async function solicitarCambioClave(
  _prevState: CambioClaveState,
  formData: FormData
): Promise<CambioClaveState> {
  const usuario = String(formData.get('usuario') ?? '')
    .trim()
    .toLowerCase();

  if (usuario.includes('@')) {
    return {
      status: 'error',
      message: 'Ingresa solo tu usuario del SIU (ej.: nombre.apellido), no tu correo electrónico.',
    };
  }

  if (!USUARIO_REGEX.test(usuario)) {
    return {
      status: 'error',
      message: 'El usuario solo puede contener letras, números y puntos (ej.: nombre.apellido).',
    };
  }

  try {
    const res = await fetch(`${process.env.API_URL}/api/siu/cambio-clave`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ usuario }),
      cache: 'no-store',
    });

    if (res.status === 429) {
      return {
        status: 'error',
        message:
          'Ya realizaste una solicitud hace poco. Espera un minuto antes de intentar de nuevo.',
      };
    }

    if (res.status === 404) {
      const data: { mensaje?: string } = await res.json().catch(() => ({}));
      return {
        status: 'error',
        message:
          data.mensaje ??
          'El usuario ingresado no existe o no tiene un correo institucional registrado. Verifica e intenta nuevamente.',
      };
    }

    if (!res.ok) {
      return {
        status: 'error',
        message:
          'No se pudo procesar tu solicitud en este momento. Intenta nuevamente en unos minutos.',
      };
    }

    const data: { empleado?: string; email?: string; mensaje?: string } = await res.json();

    if (!data.email) {
      return {
        status: 'error',
        message:
          'No se pudo procesar tu solicitud en este momento. Intenta nuevamente en unos minutos.',
      };
    }

    return { status: 'success', empleado: data.empleado, email: data.email };
  } catch {
    return {
      status: 'error',
      message: 'No se pudo conectar con el servidor. Intenta nuevamente en unos minutos.',
    };
  }
}
