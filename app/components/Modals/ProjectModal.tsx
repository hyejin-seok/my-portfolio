import Image from 'next/image'
// 임시. To Do: remove this
import { ProjectType } from '@/app/data'
import { SiGithub } from 'react-icons/si'
import { FiExternalLink, FiX } from 'react-icons/fi'

type ProjectModalProps = {
  project: ProjectType
  showModal: boolean
  setShowModal: (showModal: boolean) => void
}

export const ProjectModal = ({
  project,
  showModal,
  setShowModal
}: ProjectModalProps) => {
  return (
    <div
      className="fixed inset-0 z-30 flex items-center justify-center"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* BG overlay */}
      <div className="fixed inset-0 bg-white opacity-20 transition-opacity "></div>
      {/* Modal content */}
      <div className="relative mx-auto w-full max-w-4xl transform overflow-auto rounded-lg bg-yellow-100 p-14 shadow-xl transition-all dark:bg-cocoa">
        <button
          onClick={() => setShowModal(false)}
          type="button"
          className="absolute right-4 top-4 text-4xl text-white hover:opacity-70"
        >
          <FiX />
        </button>

        <article className="overflow-y-auto md:max-h-[calc(100vh-128px)]">
          <figure>
            <Image
              // src={`/images/projects/${project.images[0]}`}
              src={'/images/test2.png'}
              alt={`Screenshot of the ${project.title} project`}
              width={1200}
              height={800}
              className="h-full w-full rounded-lg border-[7px] border-yellow-200 "
            />
          </figure>

          <div className="mx-auto flex w-[80%] flex-col gap-6 rounded-l">
            <header>
              <h3 className="pt-10 text-center text-xl font-semibold md:text-3xl">
                {project.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-3 pt-3 text-sm md:gap-4 md:pt-4 md:text-base">
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
            <p className="whitespace-pre-line pt-2 text-base md:pt-4 md:text-lg">
              {project.description}
            </p>
            <footer className="flex items-center justify-center gap-4">
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
        </article>
      </div>
    </div>
  )
}
