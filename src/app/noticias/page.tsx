import BreadcrumbsNav from '../components/ui/BreadcrumbsNav'

import Header from '../components/layout/Header'
import Navbar from '../components/layout/NavBar'
import HeaderTitle from '../components/ui/HeaderTitle'
import TopBar from '../components/layout/TopBar'
import { WaveBackground } from '../components/layout/WaveBackground'
import Footer from '../components/layout/Footer'
import NewsMainSection from '../components/news/NewsMainSection'
import HeroNewsSection from '../components/news/HeroNewsSection'
import BottomNewsSection from '../components/news/BottomNewsSection'

export const dynamic = 'force-dynamic'

// ... existing code

export default async function NewsPage() {
  // ... existing code
  const events: any = []
  const now = new Date()
  const currentMonth = String(now.getMonth() + 1).padStart(2, '0')
  const currentMonthIndex = now.getMonth()

  return (
    <div className={`min-h-screen w-full font-sans relative flex flex-col z-0`}>
      <WaveBackground />
      <TopBar />
      <Header />
      <Navbar />

      <div className="flex flex-col items-start gap-[22px] relative mx-4 xl:mx-[10%] z-10 grow mb-8">
        <BreadcrumbsNav items={[{ label: 'Noticias' }]} />
        <div className="flex items-start gap-[27px] relative self-stretch w-full">
          <HeaderTitle
            titleFirstWorld="Noticias"
            titleSecondWorld="de Interés"
            viewAll={false}
          />
        </div>
        <NewsMainSection />
        {/* <GestorBanner /> */}
        <HeroNewsSection />
        <BottomNewsSection />
        {/* <div className="flex flex-col items-start gap-5 w-full">
          <div className="w-full h-full border rounded-xl">
            <InstagramFeed />
          </div>
        </div> */}
      </div>

      <Footer />
    </div>
  )
}
