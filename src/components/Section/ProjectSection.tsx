import GDG from '../Project/Gdg'
import Jinlo from '../Project/Jinlo'
import Ladi from '../Project/Ladi'

type ProjectInfo = {
  id: string
  bgColor: string
  Component: React.FC
}

const PROJECTS: ProjectInfo[] = [
  {
    id: 'jinlo',
    bgColor: 'bg-[#00C369]',
    Component: Jinlo,
  },
  {
    id: 'gdg',
    bgColor: 'bg-[#9097C0]',
    Component: GDG,
  },
  {
    id: 'ladi',
    bgColor: 'bg-[#1666DB]',
    Component: Ladi,
  },
]

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

const ProjectSection = () => {
  return (
    <div>
      {PROJECTS.map(({ id, bgColor, Component }, index) => (
        <div
          key={id}
          id={id}
          className={`px-8 sm:px-[4rem] md:px-[4rem] lg:px-[5rem] xl:[7rem] 2xl:px-[15rem] ${bgColor}`}
        >
          <section
            id={index === 0 ? 'project' : id}
            className="h-screen py-[50px] sm:py-[12dvh]"
          >
            <div className="flex flex-col h-full w-full text-white">
              {index === 0 && <ProjectHeader />}
              <Component />
            </div>
          </section>
        </div>
      ))}
    </div>
  )
}

export default ProjectSection
