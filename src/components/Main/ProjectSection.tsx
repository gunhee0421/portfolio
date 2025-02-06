import GDG from '../Projects/Gdg'
import Jinlo from '../Projects/Jinlo'
import Ladi from '../Projects/Ladi'

interface ProjectSectionProps {
  id?: string
  bgColor: string
  children: React.ReactNode
}

const ProjectHeader = () => (
  <div className="flex flex-row justify-between">
    <h1 className="md:pb-3 xl:pb-5 2xl:pb-10">
      <a
        href="#project"
        className="text-white md:text-2xl xl:text-3xl 2xl:text-4xl font-bold hover:text-primary transition-colors duration-500"
      >
        <span className="text-primary">03. </span>Projects
      </a>
    </h1>
  </div>
)

const ProjectContainer = ({ id, bgColor, children }: ProjectSectionProps) => (
  <div
    id={id}
    className={`px-8 sm:px-[4rem] md:px-[4rem] lg:px-[5rem] xl:[7rem] 2xl:px-[15rem] ${bgColor}`}
  >
    <section id="project" className="h-screen py-[50px] sm:py-[12dvh]">
      <div className="flex flex-col h-full w-full text-white">
        <ProjectHeader />
        {children}
      </div>
    </section>
  </div>
)

const ProjectSection = () => {
  return (
    <div>
      <ProjectContainer bgColor="bg-[#00C369]">
        <Jinlo />
      </ProjectContainer>

      <ProjectContainer id="Gdg" bgColor="bg-[#9097C0]">
        <GDG />
      </ProjectContainer>

      <ProjectContainer id="ladi" bgColor="bg-[#1666DB]">
        <Ladi />
      </ProjectContainer>
    </div>
  )
}

export default ProjectSection
