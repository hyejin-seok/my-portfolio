'use client'
import { ProjectCard } from '../Cards'
// import Image from 'next/image'
import { SectionTitle } from '../Titles'
import { projects } from '../../data'

export const Projects = () => {
  return (
    <section
      id="projects"
      className="pt-12 pb-28 md:pt-18 md:pb-40 px-4 bg-yellow-100 dark:bg-cocoa"
    >
      <div className="max-w-container mx-auto">
        <SectionTitle title="Featured Projects" />
        <div className="flex flex-col gap-20 mt-10 md:mt-14">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
