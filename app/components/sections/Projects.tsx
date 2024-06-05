'use client'
import { ProjectCard } from '../Cards'
// import Image from 'next/image'
import { SectionTitle } from '../Titles'
import { projects } from '../../data'
import { StaggeredReveal, StaggeredChild } from '../Animations'

export const Projects = () => {
  return (
    <section
      id="projects"
      className="md:pt-18 bg-yellow-100 px-4 pb-28 pt-12 dark:bg-cocoa md:pb-40"
    >
      <div className="mx-auto max-w-container">
        <SectionTitle title="Featured Projects" />
        <StaggeredReveal>
          <div className="mt-10 flex flex-col flex-wrap justify-center gap-24 px-4 md:mt-20 md:flex-row">
            {projects.map((project, index) => (
              <StaggeredChild key={index} index={index}>
                <ProjectCard key={project.id} project={project} />
              </StaggeredChild>
            ))}
          </div>
        </StaggeredReveal>
      </div>
    </section>
  )
}
