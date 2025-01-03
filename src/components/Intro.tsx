import { Header } from './Header'
import IntroSection from './IntroSection'
import { LeftNavigation } from './navigation'

const Intro = () => {
  return (
    <div className="w-full h-screen">
      <header className="fixed w-screen z-30">
        <Header />
      </header>
      <main className="px-[30rem]">
        <div>
          <IntroSection />
        </div>
        <div className="fixed bottom-0 right-20 w-fit">
          <LeftNavigation />
        </div>
      </main>
    </div>
  )
}

export default Intro
