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
      className="max-w-container mx-auto px-4 pt-12 pb-28 md:pt-20 md:pb-40"
    >
      <SectionTitle title="Technical Skills" />
      {category.map((type) => (
        <div
          key={type}
          className="mt-10 md:mt-14 flex flex-col justify-center items-center"
        >
          <h3 className="font-semibold text-2xl text-center">{type}</h3>
          <SkillIcons type={type} />
        </div>
      ))}
    </section>
  )
}
