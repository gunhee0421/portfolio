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
      <main className="px-8 sm:px-[4rem] md:px-[4rem] lg:px-[5rem] xl:[7rem] 2xl:px-[15rem]">
        <div className="fixed bottom-0 xl:right-8 2xl:right-20 w-fit">
          <LeftNavigation />
        </div>
        <div>
          <IntroSection />
        </div>
        <div>
          <AboutSection />
        </div>
        <div>
          <SkillSection />
        </div>
      </main>
    </div>
  )
}

export default Main
