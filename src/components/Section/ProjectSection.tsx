import GDG from '../Project/Gdg'
import Jinlo from '../Project/Jinlo'
import Ladi from '../Project/Ladi'

export const PROJECTS = [
  { component: <Jinlo />, color: 'bg-[#00C369]', id: 'jinlo' },
  { component: <GDG />, color: 'bg-[#9097C0]', id: 'gdg' },
  { component: <Ladi />, color: 'bg-[#1666DB]', id: 'ladi' },
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
    <article
      id="project"
      className={`h-full transition-colors duration-400 ease-in-out`}
    >
      <div
        id={PROJECTS[0].id}
        className={`block px-8 sm:px-[4rem] md:px-[4rem] lg:hidden ${PROJECTS[0].color}`}
      >
        <section
          id={PROJECTS[0].id}
          className="h-screen py-[50px] sm:py-[12dvh] text-white"
        >
          <ProjectHeader />
          {PROJECTS[0].component}
        </section>
      </div>
      {PROJECTS.slice(1).map((project, idx) => (
        <div
          key={idx}
          id={project.id}
          className={`block px-8 sm:px-[4rem] md:px-[4rem] lg:hidden ${project.color}`}
        >
          <section className="h-screen py-[50px] sm:py-[12dvh] text-white">
            {project.component}
          </section>
        </div>
      ))}
      <div className={`hidden lg:block transition-colors duration-700`}>
        {PROJECTS.map((project, idx) => (
          <div
            className={`px-8 sm:px-[4rem] md:px-[4rem] lg:px-[5rem] xl:[7rem] 2xl:px-[15rem] ${project.color}`}
            id={project.id}
            key={idx}
          >
            <section className="h-screen py-[50px] sm:py-[12dvh]">
              <div className="flex flex-col h-full w-full text-white">
                {idx === 0 && <ProjectHeader />}
                {project.component}
              </div>
            </section>
          </div>
        ))}
      </div>
    </article>
  )
}

export default ProjectSection
