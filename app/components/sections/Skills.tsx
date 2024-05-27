'use client'
import { SkillIcons } from '../Icons'
import { SkillsType } from '@/app/types'
import { SectionTitle } from '../Titles'
// import Image from 'next/image'

export const Skills = () => {
  const category: SkillsType[] = ['Front-end', 'Back-end', 'Dev Tools']

  return (
    <section
      id="skills"
      className="md:pt-18 mx-auto max-w-container px-4 pb-28 pt-12 md:pb-40"
    >
      <SectionTitle title="Technical Skills" />
      {category.map((type) => (
        <div
          key={type}
          className="mt-10 flex flex-col items-center justify-center md:mt-14"
        >
          <h3 className="text-center text-2xl font-semibold">{type}</h3>
          <SkillIcons type={type} />
        </div>
      ))}
    </section>
  )
}
