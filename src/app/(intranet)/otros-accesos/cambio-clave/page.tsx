import BreadcrumbsNav from '@/app/components/ui/BreadcrumbsNav';
import HeaderTitle from '@/app/components/ui/HeaderTitle';
import CambioClaveForm from '@/app/components/password/CambioClaveForm';

export default function CambioClavePage() {
  return (
    <>
      <BreadcrumbsNav
        items={[
          { label: 'Otros accesos', href: '/otros-accesos' },
          { label: 'Cambio de clave SIU' },
        ]}
      />

      <div className="relative flex w-full items-start gap-[27px] self-stretch">
        <HeaderTitle titleFirstWorld="Cambio de" titleSecondWorld="Clave SIU" viewAll={false} />
      </div>

      <p className="-mt-2 font-['Poppins'] text-sm text-zinc-500">
        Cambia o desbloquea la contraseña de tu usuario del SIU. Recibirás una clave temporal en tu
        correo institucional.
      </p>

      <div className="w-full py-4">
        <CambioClaveForm />
      </div>
    </>
  );
}
