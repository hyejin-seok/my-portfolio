'use client'
import { ProjectCard } from '../Cards'
// import Image from 'next/image'
import { SectionTitle } from '../Titles'
import { projects } from '../../data'
import {
  AnimationWrapper,
  staggeredRevealVar,
  staggeredChildVarY
} from '../Animations'

export const Projects = () => {
  return (
    <section
      id="projects"
      className="md:pt-18 bg-yellow-100 px-4 pb-28 pt-12 dark:bg-cocoa md:pb-40"
    >
      <div className="mx-auto max-w-container">
        <SectionTitle title="Featured Projects" />
        <AnimationWrapper variants={staggeredRevealVar}>
          <div className="mt-10 flex flex-col flex-wrap justify-center gap-24 px-4 md:mt-20 md:flex-row">
            {projects.map((project, index) => (
              <AnimationWrapper
                key={index}
                index={index}
                variants={staggeredChildVarY}
              >
                <ProjectCard key={project.id} project={project} />
              </AnimationWrapper>
            ))}
          </div>
        </AnimationWrapper>
      </div>
    </section>
  )
}
