import BreadcrumbsNav from '@/app/components/ui/BreadcrumbsNav';
import HeaderTitle from '@/app/components/ui/HeaderTitle';
import NewsMainSection from '@/app/components/news/NewsMainSection';
import HeroNewsSection from '@/app/components/news/HeroNewsSection';
import BottomNewsSection from '@/app/components/news/BottomNewsSection';

export const dynamic = 'force-dynamic';

export default async function NewsPage() {
  return (
    <>
      <BreadcrumbsNav items={[{ label: 'Noticias' }]} />
      <div className="relative flex w-full items-start gap-[27px] self-stretch">
        <HeaderTitle titleFirstWorld="Noticias" titleSecondWorld="de Interés" viewAll={false} />
      </div>
      <NewsMainSection />
      <HeroNewsSection />
      <BottomNewsSection />
    </>
  );
}
