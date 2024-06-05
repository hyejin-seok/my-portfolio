import Image from 'next/image'
import { ProjectType } from '@/app/data'
import { SiGithub } from 'react-icons/si'
import { FiExternalLink, FiInfo } from 'react-icons/fi'
import { useState } from 'react'
import { ProjectModal } from '../Modals'

type ProjectCardProps = {
  project: ProjectType
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [showModal, setShowModal] = useState(false)

  const reverseLayout = project.id % 2 === 0

  return (
    <article className="font-medium dark:font-normal">
      <div
        role="button"
        tabIndex={project.id}
        className={`flex flex-col items-center justify-center xl:flex-row ${reverseLayout && 'xl:flex-row-reverse'}`}
      >
        <figure
          onClick={() => setShowModal(true)}
          className="group relative w-[300px] cursor-pointer overflow-hidden xs:w-[380px] md:w-[600px] xl:h-[290px] xl:max-w-[47%]"
        >
          <Image
            src={`/images/projects/${project.images[0]}`}
            alt={`Screenshot of the ${project.title} project`}
            width={624}
            height={362}
            className=" object-cover object-top"
          />

          {/* BG overlay */}
          <div
            className={`absolute inset-0 flex translate-y-full transform items-center justify-center  bg-yellow-200 bg-opacity-70 text-xl font-semibold text-yellow-50 opacity-70 group-hover:translate-y-0 dark:bg-black dark:bg-opacity-80 xl:-translate-y-0 ${reverseLayout ? 'xl:-translate-x-full xl:group-hover:translate-x-0' : 'xl:translate-x-full xl:group-hover:translate-x-0'}  pointer-events-none transition-transform duration-700 group-hover:opacity-100`}
          >
            <FiInfo className="pr-2 text-2xl md:text-4xl" />
            <p>More Details</p>
          </div>
        </figure>

        {/* <div className="flex cursor-default flex-col gap-3 rounded-xl bg-white p-4 dark:bg-black sm:w-[90%] sm:gap-6 md:w-[70%] md:p-8 lg:w-1/2 "> */}
        <div className="flex h-auto w-[300px] cursor-default flex-col gap-3 bg-yellow-50 p-4 dark:bg-black xs:w-[380px] md:w-[600px] md:gap-6 xl:h-[290px] xl:max-w-[47%]">
          <header>
            <h3 className="text-center text-xl font-semibold sm:pt-2 md:text-2xl">
              {project.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-2 pt-2 text-xs sm:gap-3 sm:pt-3 md:text-sm">
              {project.techStacks.map((stack) => (
                <div
                  className="w-fit rounded-lg border-4 border-double border-yellow-200 p-1"
                  key={stack}
                >
                  {stack}
                </div>
              ))}
            </div>
          </header>
          <p className="line-clamp-3 whitespace-pre-line text-sm sm:px-4 md:px-6 md:text-base">
            {project.description}
          </p>
          <footer className="flex flex-col items-center justify-center gap-4 xs:flex-row">
            {project.sourceCode && (
              <div className="flex items-center gap-2">
                <h4 className="text-sm md:text-base">Source Code:</h4>
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-transform duration-500 hover:scale-110 hover:text-yellow-400 dark:hover:text-yellow-400"
                >
                  <SiGithub className="text-2xl text-yellow-200 md:text-3xl" />
                </a>
              </div>
            )}
            {project.liveDemo && (
              <div className="flex items-center gap-2">
                <h4 className="text-sm md:text-base">Live Demo:</h4>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-transform duration-500 hover:scale-110 hover:text-yellow-400 dark:hover:text-yellow-400"
                >
                  <FiExternalLink className="text-2xl text-yellow-200 md:text-3xl" />
                </a>
              </div>
            )}
          </footer>
        </div>
      </div>
      {showModal && (
        <ProjectModal
          project={project}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </article>
  )
}
