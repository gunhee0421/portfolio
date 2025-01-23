import Jinlo from '../Projects/Jinlo'
import Ladi from '../Projects/Ladi'

const ProjectSection = () => {
  return (
    <div>
      <div className="px-8 sm:px-[4rem] md:px-[4rem] lg:px-[5rem] xl:[7rem] 2xl:px-[15rem] bg-[#00C369]">
        <section id="project" className="h-screen py-[50px] sm:py-[12dvh]">
          <div className="flex flex-col h-full w-full text-white">
            <div className=" flex flex-row justify-between">
              <h1 className="md:pb-3 xl:pb-5 2xl:pb-10">
                <a
                  href="#project"
                  className="text-white md:text-2xl xl:text-3xl 2xl:text-4xl font-bold hover:text-primary transition-colors duration-500"
                >
                  <span className="text-primary">03. </span>Projects
                </a>
              </h1>
            </div>
            <Jinlo />
          </div>
        </section>
      </div>
      <div className="px-8 sm:px-[4rem] md:px-[4rem] lg:px-[5rem] xl:[7rem] 2xl:px-[15rem] bg-[#1666DB]">
        <section id="project" className="h-screen py-[50px] sm:py-[12dvh]">
          <div className="flex flex-col h-full w-full text-white">
            <div className=" flex flex-row justify-between">
              <h1 className="md:pb-3 xl:pb-5 2xl:pb-10">
                <a
                  href="#project"
                  className="text-white md:text-2xl xl:text-3xl 2xl:text-4xl font-bold hover:text-primary transition-colors duration-500"
                >
                  <span className="text-primary">03. </span>Projects
                </a>
              </h1>
            </div>
            <Ladi />
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProjectSection
