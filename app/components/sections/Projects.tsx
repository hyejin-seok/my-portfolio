'use client'
// import Image from 'next/image'
import { SectionTitle } from '../titles'

export const Projects = () => {
  return (
    <section
      id="projects"
      className="pt-12 pb-28 md:pt-20 md:pb-40 px-4 bg-yellow-100 dark:bg-cocoa"
    >
      <div className="max-w-container mx-auto">
        <SectionTitle title="Featured Projects" />
      </div>
    </section>
  )
}
