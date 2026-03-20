import TopBar from './components/layout/TopBar'
import Header from './components/layout/Header'
import NavBar from './components/layout/NavBar'
import NewsSection from './components/news/NewSection'
import EventsSection from './components/events/EventSection'
import { WaveBackground } from './components/layout/WaveBackground'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen w-full font-sans relative flex flex-col z-0">
      <WaveBackground />
      <TopBar />
      <Header />
      <NavBar />

      {/* 4. Contenido Principal */}
      <div className="flex flex-col items-start gap-[22px] relative w-full px-4 lg:px-[10%] max-w-[1920px] mx-auto z-10 grow mb-8">
        <div className="flex flex-col lg:flex-row items-stretch gap-[27px] relative self-stretch w-full">
          <NewsSection />
          <EventsSection />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
