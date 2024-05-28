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
        className={`flex flex-col items-center xl:flex-row ${reverseLayout && 'xl:flex-row-reverse'}`}
      >
        <figure
          onClick={() => setShowModal(true)}
          className="group relative w-full cursor-pointer overflow-hidden sm:w-[90%] md:w-[70%] lg:w-1/2"
        >
          <Image
            src={`/images/projects/${project.images[0]}`}
            // src={'/images/test2.png'}
            alt={`Screenshot of the ${project.title} project`}
            width={1200}
            height={800}
            className="h-full w-full rounded-xl border-[7px] border-yellow-200 "
          />

          {/* BG overlay */}
          <div
            className={`absolute inset-0 flex translate-y-full transform flex-col items-center justify-center rounded-xl bg-yellow-200 bg-opacity-80 text-xl font-semibold text-white opacity-0 group-hover:translate-y-0 dark:bg-black dark:bg-opacity-80 xl:-translate-y-0 ${reverseLayout ? 'xl:-translate-x-full xl:group-hover:translate-x-0' : 'xl:translate-x-full xl:group-hover:translate-x-0'}   pointer-events-none transition-transform duration-700 group-hover:opacity-100`}
          >
            <FiInfo className="pb-2 text-4xl" />
            <p>More Details</p>
          </div>
        </figure>

        <div className="flex w-full cursor-default flex-col gap-3 rounded-xl bg-white p-4 dark:bg-black sm:w-[90%] sm:gap-6 md:w-[70%] md:p-8 lg:w-1/2 ">
          <header>
            <h3 className="text-center text-xl font-semibold md:text-3xl">
              {project.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-2 pt-3 text-sm sm:gap-4 md:pt-4 md:text-base">
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
          <p className="line-clamp-4 whitespace-pre-line pt-2 text-base md:pt-4 md:text-lg">
            {project.description}
          </p>
          <footer className="flex flex-col items-center justify-center gap-4 xs:flex-row">
            {project.sourceCode && (
              <div className="flex items-center gap-2">
                <h4 className="text-base md:text-lg">Source Code:</h4>
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
                <h4 className="text-base md:text-lg">Live Demo:</h4>
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
