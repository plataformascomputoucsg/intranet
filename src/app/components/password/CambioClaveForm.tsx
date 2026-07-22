'use client';

import { useActionState } from 'react';
import { solicitarCambioClave, CambioClaveState } from '@/app/actions/password';
import { UserRound, Mail, ShieldAlert, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

const initialState: CambioClaveState = { status: 'idle' };

export default function CambioClaveForm() {
  const [state, formAction, isPending] = useActionState(solicitarCambioClave, initialState);

  if (state.status === 'success') {
    return (
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-4 rounded-[20px] border border-zinc-500/40 bg-white p-8 font-['Poppins']">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100">
            <CheckCircle2 className="h-6 w-6 text-emerald-600" />
          </div>
          <h2 className="text-lg font-bold text-gray-800">Solicitud procesada</h2>
        </div>

        <p className="text-sm leading-relaxed text-gray-700">
          Estimado <b>{state.empleado?.trim() ? state.empleado : 'usuario'}</b>,
          <br />
          En atención a tu petición de cambio de contraseña, tu solicitud ha sido procesada y la
          información fue enviada a la siguiente dirección de correo electrónico:
        </p>

        <div className="flex items-center gap-2 rounded-xl bg-[#a90046]/5 px-4 py-3">
          <Mail className="h-5 w-5 shrink-0 text-[#a90046]" />
          <span className="text-sm font-bold break-all text-[#a90046]">{state.email}</span>
        </div>

        <p className="text-xs leading-relaxed text-zinc-500">
          Si has usado este formulario más de dos veces y no has recibido un correo con la
          información de tu contraseña, por favor escríbenos a{' '}
          <a
            href="mailto:soporte.siu@cu.ucsg.edu.ec"
            className="font-semibold text-[#a90046] hover:underline"
          >
            soporte.siu@cu.ucsg.edu.ec
          </a>
        </p>

        <p className="text-sm font-semibold text-gray-800">
          Gracias por tu solicitud.
          <br />
          Centro de Cómputo — UCSG
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="mx-auto flex w-full max-w-2xl flex-col gap-5 rounded-[20px] border border-zinc-500/40 bg-white p-8 font-['Poppins']"
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-bold text-gray-800">
          Solicitud de Cambio o Desbloqueo de Contraseña
        </h2>
        <p className="text-sm text-zinc-500">Por favor ingresa tu usuario del SIU.</p>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="usuario" className="text-sm font-semibold text-gray-800">
          Usuario del SIU
        </label>
        <div className="relative">
          <UserRound className="pointer-events-none absolute top-1/2 left-3.5 h-5 w-5 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            id="usuario"
            name="usuario"
            required
            autoComplete="username"
            placeholder="Ej.: nombre.apellido"
            disabled={isPending}
            className="w-full rounded-xl border border-zinc-300 py-3 pr-4 pl-11 text-sm text-gray-800 transition-colors outline-none placeholder:text-zinc-400 hover:border-[#a90046]/50 focus:border-[#a90046] disabled:opacity-60"
          />
        </div>
      </div>

      {state.status === 'error' && (
        <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
          <p className="text-sm text-red-700">{state.message}</p>
        </div>
      )}

      <div className="flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
        <Mail className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
        <p className="text-sm leading-relaxed text-amber-800">
          <b>Atención:</b> la información de tu usuario con la nueva contraseña temporal será
          enviada a tu cuenta de correo electrónico de la Universidad (
          <span className="font-semibold">@cu.ucsg.edu.ec</span>).
        </p>
      </div>

      <div className="flex items-start gap-2 rounded-xl bg-zinc-50 px-4 py-3">
        <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500" />
        <p className="text-xs leading-relaxed text-zinc-500">
          <b>Nota:</b> recuerda que todos los datos que ingreses en el SIU se registran para
          auditoría interna de la Universidad Católica de Santiago de Guayaquil. Cualquier
          desbloqueo de contraseña no autorizado será notificado a las autoridades pertinentes.
        </p>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex w-fit items-center gap-2 self-center rounded-xl bg-[#a90046] px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
        {isPending ? 'Enviando...' : 'Enviar solicitud'}
      </button>
    </form>
  );
}
