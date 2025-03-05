import { useState } from 'react'
import { SectionTitle } from '../ui/Title'
import { CustomCard } from '../ui/Card/card'
import PROJECTS from '../Project/Project'

const ProjectSection = () => {
  const [selected, setSelected] = useState('All')

  return (
    <article
      id="project"
      className={`h-full transition-colors duration-400 ease-in-out`}
    >
      <div className="lg:hidden">
        {/* <div
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
        ))} */}
      </div>
      <div className={`hidden lg:block`}>
        <div className="hidden lg:block px-8 sm:px-[4rem] md:px-[4rem] lg:px-[5rem] xl:px-[7rem] 2xl:px-[15rem]">
          <section className="h-screen py-[50px] sm:py-[12dvh] flex flex-col w-full text-white relative">
            <div className="flex justify-between items-center">
              <SectionTitle title="Projects" />
              <div className="flex gap-4 rounded-full px-2 py-1 bg-bgGray">
                {['All', 'team', 'Single'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelected(type)}
                    className={`w-16 h-12 flex items-center justify-center rounded-[75px] text-lg transition-colors 
                  ${selected === type ? 'bg-white text-black font-bold' : 'font-medium'}`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="h-[calc(100%-2rem)] grid lg:grid-rows-3 lg:grid-cols-3 xl:grid-cols-4 xl:grid-rows-2 gap-4 mt-8">
              {PROJECTS.map((project) => (
                <CustomCard key={project.id} data={project} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}

export default ProjectSection
