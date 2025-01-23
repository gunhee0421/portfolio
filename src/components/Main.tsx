import { Header } from './Header'
import { AboutSection } from './Main/AboutSection'
import IntroSection from './Main/IntroSection'
import ProjectSection from './Main/ProjectSection'
import SkillSection from './Main/SkillSection'
import { LeftNavigation } from './navigation'

const Main = () => {
  return (
    <div className="w-full min-h-screen">
      <header className="fixed w-screen z-30">
        <Header />
      </header>
      <main>
        <div className="px-8 sm:px-[4rem] md:px-[4rem] lg:px-[5rem] xl:[7rem] 2xl:px-[15rem] bg-bgBlack">
          <div className="fixed right-[4dvw] bottom-0 xl:right-8 2xl:right-20 w-fit ">
            <LeftNavigation />
          </div>
          <IntroSection />
          <AboutSection />
          <SkillSection />
        </div>
        <ProjectSection />
      </main>
    </div>
  )
}

export default Main
