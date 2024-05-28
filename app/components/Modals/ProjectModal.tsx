import Image from 'next/image'
// 임시. To Do: remove this
import { ProjectType } from '@/app/data'
import { SiGithub } from 'react-icons/si'
import { FiExternalLink, FiX, FiLayers, FiFileText } from 'react-icons/fi'

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
      <div className="fixed inset-0 bg-black opacity-80 transition-opacity dark:bg-white "></div>
      {/* Modal content */}
      <div className="relative mx-auto w-[95%] max-w-4xl transform overflow-auto rounded-xl bg-white px-4 py-14 shadow-hero-img-light transition-all dark:bg-cocoa dark:shadow-hero-img-dark md:w-[80%] md:px-10 lg:px-14 ">
        <button
          onClick={() => setShowModal(false)}
          type="button"
          className="absolute right-4 top-4 text-4xl text-black hover:opacity-70 dark:text-white"
        >
          <FiX />
        </button>

        <article className="max-h-[80vh] overflow-y-auto">
          <figure className="h-64">
            <Image
              src={`/images/projects/${project.images[0]}`}
              // src={'/images/test2.png'}
              alt={`Screenshot of the ${project.title} project`}
              width={624}
              height={362}
              className="h-full w-full rounded-lg border-[7px] border-yellow-200 "
            />
          </figure>

          <div className="mx-auto flex w-full flex-col gap-4 rounded-lg md:gap-8">
            <header>
              <h3 className="pt-6 text-center text-2xl font-semibold md:pt-10 md:text-3xl">
                {project.title}
              </h3>
              <h4 className="flex gap-2 pt-4 text-lg font-semibold text-yellow-200 md:pt-6 md:text-xl">
                {/* 아이콘 삭제시 위의 flex와 gap-2 2가지 삭제필요 */}
                <FiLayers className="text-2xl  md:text-3xl" />
                Tech Stack:
              </h4>

              <div className="flex flex-wrap gap-3 pt-2 text-sm md:gap-4  md:text-base">
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
            <div>
              <h4 className="flex gap-2 text-lg font-semibold text-yellow-200 md:text-xl">
                {/* 아이콘 삭제시 위의 flex, gap-2 2가지 삭제필요 */}
                <FiFileText className="text-2xl  md:text-3xl" />
                Description:
              </h4>
              <p className="whitespace-pre-line pt-1 text-base md:text-lg">
                {project.description}
              </p>
            </div>
            <footer className="flex flex-col gap-4  ">
              {project.sourceCode && (
                <div>
                  <h4 className="flex gap-2 pb-1 text-base font-semibold text-yellow-200 md:text-xl ">
                    <SiGithub className="text-2xl md:text-3xl" />
                    Source Code:
                  </h4>
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-yellow-200"
                  >
                    {project.sourceCode}
                  </a>
                </div>
              )}
              {project.liveDemo && (
                <div>
                  <h4 className="flex gap-2 pb-1 text-base font-semibold text-yellow-200 md:text-lg">
                    <FiExternalLink className="text-2xl  md:text-3xl" />
                    Live Demo:
                  </h4>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-yellow-200"
                  >
                    {project.liveDemo}
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
