'use client'

import { ProjectType } from '@/app/data'
import { SiGithub } from 'react-icons/si'
import { FiExternalLink, FiX, FiLayers, FiFileText } from 'react-icons/fi'
import { PageDisplay } from './PageDisplay'
import { AppGallery } from './AppGallery'

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
  const isPageSite = project.type === 'page'

  return (
    <div
      className="fixed inset-0 z-30 flex items-center justify-center"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* BG overlay */}
      <div className="otransition-opacity fixed inset-0 bg-slate-500 opacity-80"></div>
      {/* Modal content */}
      <div className="relative mx-auto w-[95%] max-w-4xl transform overflow-auto rounded-xl bg-yellow-50 px-4 py-14 shadow-lg transition-all dark:bg-cocoa  md:w-[80%] md:px-10 lg:px-14 ">
        <button
          onClick={() => setShowModal(false)}
          type="button"
          className="absolute right-4 top-4 text-4xl text-black hover:opacity-70 dark:text-white"
        >
          <FiX />
        </button>

        <article className="max-h-[80vh] overflow-y-auto">
          <figure>
            {isPageSite ? (
              <PageDisplay
                imageUrl={`/images/projects/${project.images[1]}`}
                altText={`Screenshot of the ${project.title} project`}
              />
            ) : (
              <AppGallery images={project.images} title={project.title} />
            )}
          </figure>

          <div className="mx-auto flex w-full flex-col gap-4 rounded-lg  md:gap-8">
            <header>
              <h3 className="pt-6 text-center text-xl font-semibold md:pt-10 md:text-2xl">
                {project.title}
              </h3>
              <h4 className="flex gap-2 pt-4 text-lg font-semibold text-yellow-200 md:pt-6 md:text-xl">
                {/* 아이콘 삭제시 위의 flex와 gap-2 2가지 삭제필요 */}
                <FiLayers className="text-xl  md:text-2xl" />
                Tech Stack:
              </h4>

              <div className="flex flex-wrap gap-3 pt-2 text-xs md:text-sm">
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
                <FiFileText className="text-xl  md:text-2xl" />
                Description:
              </h4>
              <p className="whitespace-pre-line pt-1 text-sm md:text-base">
                {project.description}
              </p>
            </div>
            <footer className="flex flex-col gap-4  ">
              {project.sourceCode && (
                <div>
                  <h4 className="flex gap-2 pb-1 text-base font-semibold text-yellow-200 md:text-xl ">
                    <SiGithub className="text-xl md:text-2xl" />
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
