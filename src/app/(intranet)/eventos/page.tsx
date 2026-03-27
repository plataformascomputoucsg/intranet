import BreadcrumbsNav from '@/app/components/ui/BreadcrumbsNav';
import HeaderTitle from '@/app/components/ui/HeaderTitle';
import EventMainSection from '@/app/components/events/EventMainSection';

export const dynamic = 'force-dynamic';

export default async function EventosPage() {
  return (
    <>
      <BreadcrumbsNav items={[{ label: 'Eventos' }]} />
      <div className="relative flex w-full items-start gap-[27px] self-stretch">
        <HeaderTitle titleFirstWorld="Eventos de" titleSecondWorld="INTERES" viewAll={false} />
      </div>
      <EventMainSection />
    </>
  );
}
