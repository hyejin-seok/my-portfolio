'use client'
import { SkillIcons } from '../Icons'
import { SkillsType } from '@/app/types'
import { SectionTitle } from '../Titles'
import {
  AnimationWrapper,
  staggeredRevealVar,
  staggeredChildVarX
} from '../Animations'

export const Skills = () => {
  const category: SkillsType[] = ['Front-end', 'Back-end', 'Dev Tools']

  return (
    <section
      id="skills"
      className="mx-auto max-w-container px-4 pb-24 pt-24 md:pb-32 md:pt-32"
    >
      <SectionTitle title="Technical Skills" />
      <AnimationWrapper variants={staggeredRevealVar}>
        {category.map((type) => (
          <AnimationWrapper key={type} variants={staggeredChildVarX}>
            <div className="mt-10 flex flex-col items-center justify-center md:mt-14">
              <h3 className="text-center text-2xl font-semibold">{type}</h3>
              <SkillIcons type={type} />
            </div>
          </AnimationWrapper>
        ))}
      </AnimationWrapper>
    </section>
  )
}
