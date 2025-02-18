import GDG from '../Project/Gdg'
import Jinlo from '../Project/Jinlo'
import Ladi from '../Project/Ladi'
import TodayClothes from '../Project/TodayClothes'
import TodayScrum from '../Project/TodayScrum'
import { SectionTitle } from '../ui/Title'

export const PROJECTS = [
  { component: <Jinlo />, color: 'bg-[#00C369]', id: 'jinlo' },
  { component: <GDG />, color: 'bg-[#9097C0]', id: 'gdg' },
  { component: <Ladi />, color: 'bg-[#1666DB]', id: 'ladi' },
  { component: <TodayClothes />, color: 'bg-[#f47272]', id: 'todayclothes' },
  { component: <TodayScrum />, color: 'bg-[#d167f5]', id: 'todayscrum' },
]

const ProjectSection = () => {
  return (
    <article
      id="project"
      className={`h-full transition-colors duration-400 ease-in-out`}
    >
      <div className="lg:hidden">
        <div
          id={PROJECTS[0].id}
          className={`block px-8 sm:px-[4rem] md:px-[4rem] lg:hidden ${PROJECTS[0].color}`}
        >
          <section className="h-screen py-[50px] sm:py-[12dvh] text-white">
            <SectionTitle title="Projects" />
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
      </div>
      <div className={`hidden lg:block`}>
        {PROJECTS.map((project, idx) => (
          <div
            id={project.id}
            className={`px-8 sm:px-[4rem] md:px-[4rem] lg:px-[5rem] xl:[7rem] 2xl:px-[15rem] ${project.color}`}
            key={idx}
          >
            <section className="h-screen py-[50px] sm:py-[12dvh]">
              <div className="flex flex-col h-full w-full text-white">
                {idx === 0 && <SectionTitle title="Project" />}
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
