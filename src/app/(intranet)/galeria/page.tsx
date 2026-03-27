import BreadcrumbsNav from '@/app/components/ui/BreadcrumbsNav';
import HeaderTitle from '@/app/components/ui/HeaderTitle';
import GalleryMainSection from '@/app/components/gallery/GalleryMainSection';

export const dynamic = 'force-dynamic';

export default async function GaleriaPage() {
  return (
    <>
      <BreadcrumbsNav items={[{ label: 'Galería de fotos' }]} />

      <div className="relative flex w-full items-start gap-[27px] self-stretch">
        <HeaderTitle titleFirstWorld="GALERÍA DE" titleSecondWorld="EVENTOS" viewAll={false} />
      </div>

      <GalleryMainSection />
    </>
  );
}
