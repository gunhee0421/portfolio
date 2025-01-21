import { Header } from './Header'
import { AboutSection } from './Main/AboutSection'
import IntroSection from './Main/IntroSection'
import SkillSection from './Main/SkillSection'
import { LeftNavigation } from './navigation'

const Main = () => {
  return (
    <div className="w-full min-h-screen">
      <header className="fixed w-screen z-30">
        <Header />
      </header>
      <main className="px-[15rem]">
        <div>
          <IntroSection />
        </div>
        <div>
          <AboutSection />
        </div>
        <div>
          <SkillSection />
        </div>
        <div className="fixed bottom-0 right-20 w-fit">
          <LeftNavigation />
        </div>
      </main>
    </div>
  )
}

export default Main
