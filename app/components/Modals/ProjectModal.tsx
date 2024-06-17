'use client'

import { useEffect } from 'react'
import { useTheme } from 'next-themes'
import {
  FiExternalLink,
  FiX,
  FiLayers,
  FiFileText,
  FiStar,
  FiCheck
} from 'react-icons/fi'
import { SiGithub } from 'react-icons/si'
import { AppGallery } from './AppGallery'
import { PageDisplay } from './PageDisplay'
import { ProjectType } from '@/app/data'

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
  const { theme } = useTheme()
  const isPageSite = project.type === 'page'

  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      setShowModal(false)
    }
  }

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    // Clean-up function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showModal])

  const getImageUrl = () => {
    const portfolioSite = project.id === 6
    return `/images/projects/${portfolioSite && theme === 'light' ? project.images[2] : project.images[1]}`
  }

  return (
    <div
      className="fixed inset-0 z-30 flex items-center justify-center"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* BG overlay */}
      <div
        onClick={handleOverlayClick}
        className="fixed inset-0 bg-slate-500 opacity-80 transition-opacity"
      ></div>
      {/* Modal content */}
      <div
        onClick={(e) => e.stopPropagation}
        className="relative mx-auto w-[95%] max-w-4xl transform overflow-auto rounded-xl bg-yellow-50 px-4 py-10 shadow-lg transition-all dark:bg-cocoa  md:w-[80%] md:px-8 md:py-12 "
      >
        <button
          onClick={() => setShowModal(false)}
          type="button"
          className="absolute right-1 top-1 text-4xl text-black hover:opacity-70 dark:text-white sm:right-4 sm:top-4"
        >
          <FiX />
        </button>

        <article className="max-h-[80vh] overflow-y-auto">
          <figure>
            {isPageSite ? (
              <PageDisplay
                imageUrl={getImageUrl() || ''}
                altText={`Screenshot of the ${project.title} project`}
              />
            ) : (
              <AppGallery images={project.images} title={project.title} />
            )}
          </figure>

          <div className="mx-auto flex w-full flex-col gap-4 rounded-lg px-2 md:gap-8 md:px-4">
            <header>
              <h3 className="text-center text-xl font-semibold sm:pt-4 md:text-2xl lg:pt-6">
                {project.title}
              </h3>
              <h4 className="flex items-center gap-1 pt-3 text-lg font-semibold text-yellow-200 md:gap-2 md:pt-6 md:text-xl">
                <FiLayers className="text-xl  md:text-2xl" /> Tech Stack:
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
              <h4 className="flex items-center gap-1 text-lg font-semibold text-yellow-200 md:gap-2 md:text-xl">
                <FiFileText className="text-xl  md:text-2xl" />
                Description:
              </h4>
              <div className="flex flex-col gap-2 whitespace-pre-line pt-1 md:gap-3">
                {project.descriptions.map((description, index) => (
                  <p className="flex text-sm md:text-base" key={index}>
                    {description}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h4 className="flex items-center gap-1 text-lg font-semibold text-yellow-200 md:gap-2 md:text-xl">
                <FiStar className="text-xl  md:text-2xl" />
                Key Features:
              </h4>
              <div className="flex flex-col gap-1 pt-1">
                {project.features.map((feature) => (
                  <div className="flex text-sm md:text-base" key={feature}>
                    <FiCheck className="mr-1 mt-1 h-3 w-3 flex-shrink-0 md:h-4 md:w-4" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            <footer className="flex flex-col gap-4 md:gap-8  ">
              {project.sourceCode && (
                <div>
                  <h4 className="flex items-center gap-1 pb-1 text-lg font-semibold text-yellow-200 md:gap-2 md:text-xl ">
                    <SiGithub className="text-xl md:text-2xl" />
                    Source Code:
                  </h4>
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline hover:text-yellow-200 md:text-base"
                  >
                    {project.sourceCode}
                  </a>
                </div>
              )}
              {project.liveDemo && (
                <div>
                  <h4 className="flex items-center gap-1 pb-1 text-lg font-semibold text-yellow-200  md:gap-2 md:text-xl">
                    <FiExternalLink className="text-xl  md:text-2xl" />
                    Live Demo:
                  </h4>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline hover:text-yellow-200 md:text-base"
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
