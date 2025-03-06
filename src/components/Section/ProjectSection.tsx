import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionTitle } from '../ui/Title'
import { CustomCard } from '../ui/Card/card'
import PROJECTS from '../Project/Project'

const ProjectSection = () => {
  const [selected, setSelected] = useState('All')
  const [projects, setProjects] = useState(PROJECTS)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px 0px' })

  useEffect(() => {
    if (selected === 'All') {
      setProjects(PROJECTS)
    } else if (selected === 'Team') {
      setProjects(PROJECTS.filter((project) => project.team === true))
    } else if (selected === 'Single') {
      setProjects(PROJECTS.filter((project) => project.team === false))
    }
  }, [selected])

  return (
    <motion.article
      ref={ref}
      id="project"
      className="h-full transition-colors duration-400 ease-in-out"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="lg:hidden text-white">
        <section className="block px-8 sm:px-[4rem] md:px-[4rem] lg:hidden">
          <div className="flex justify-between items-center">
            <SectionTitle title="Projects" />
            <div className="flex gap-2 rounded-full px-2 py-1 bg-bgGray">
              {['All', 'Team', 'Single'].map((type) => (
                <motion.button
                  key={type}
                  onClick={() => setSelected(type)}
                  className={`w-12 h-8 flex items-center justify-center rounded-[75px] text-md transition-colors 
                  ${selected === type ? 'bg-white text-black font-bold' : 'font-medium'}`}
                  whileTap={{ scale: 0.9 }}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>
          <motion.div
            className="h-[calc(100%-2rem)] grid grid-cols-1 gap-4 my-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <CustomCard data={project} />
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
      <div className="hidden lg:block">
        <div className="hidden lg:block px-8 sm:px-[4rem] md:px-[4rem] lg:px-[5rem] xl:px-[7rem] 2xl:px-[15rem]">
          <section className="min-h-screen py-[50px] sm:py-[12dvh] flex flex-col w-full text-white relative">
            <div className="flex justify-between items-center">
              <SectionTitle title="Projects" />
              <div className="flex gap-4 rounded-full px-2 py-1 bg-bgGray">
                {['All', 'Team', 'Single'].map((type) => (
                  <motion.button
                    key={type}
                    onClick={() => setSelected(type)}
                    className={`w-16 h-12 flex items-center justify-center rounded-[75px] text-lg transition-colors 
                  ${selected === type ? 'bg-white text-black font-bold' : 'font-medium'}`}
                    whileTap={{ scale: 0.9 }}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </motion.button>
                ))}
              </div>
            </div>
            <motion.div
              className="h-[calc(100%-2rem)] grid lg:grid-cols-3 xl:grid-cols-4 grid-rows-2 gap-4 my-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <CustomCard data={project} />
                </motion.div>
              ))}
            </motion.div>
          </section>
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectSection
