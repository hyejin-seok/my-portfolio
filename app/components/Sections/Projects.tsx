'use client'
import { ProjectCard } from '../Cards'
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
      className="bg-yellow-100 px-4 pb-24 pt-24 dark:bg-cocoa md:pb-32 md:pt-32"
    >
      <div className="mx-auto max-w-container">
        <SectionTitle title="Featured Projects" />
        <AnimationWrapper variants={staggeredRevealVar}>
          <div className="mt-10 flex flex-col flex-wrap justify-center gap-24 px-4 md:mt-20 md:flex-row">
            {projects.map((project) => (
              <AnimationWrapper key={project.id} variants={staggeredChildVarY}>
                <ProjectCard key={project.id} project={project} />
              </AnimationWrapper>
            ))}
          </div>
        </AnimationWrapper>
      </div>
    </section>
  )
}
