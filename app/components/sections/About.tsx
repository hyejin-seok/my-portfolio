'use client'
import Image from 'next/image'
import { SectionTitle } from '../Titles'
import {
  AnimationWrapper,
  slideInFromLeftVar,
  fadeInUPVar
} from '../Animations'

export const About = () => {
  return (
    <section
      id="about"
      className="bg-yellow-100 px-4 pb-24 pt-24 dark:bg-cocoa md:pb-32 md:pt-32"
    >
      <div className="mx-auto max-w-container">
        <SectionTitle title="About Hyejin" />
        <div className="mt-12 flex flex-col items-center gap-10 md:justify-center lg:mt-24 lg:flex-row">
          <AnimationWrapper
            variants={slideInFromLeftVar}
            className="w-[60%] lg:w-[45%]"
          >
            <Image
              src="/images/about-me.jpeg"
              alt="my picture"
              width="400"
              height="400"
              className="mx-auto h-auto rounded-xl ring-4 ring-yellow-200"
            />
          </AnimationWrapper>

          <AnimationWrapper
            variants={fadeInUPVar}
            className="flex w-[95%] flex-col gap-5 rounded-lg font-medium dark:font-normal xs:w-[80%] md:text-lg lg:w-[45%]"
          >
            <p>
              I am a full stack web developer with experience in both design and
              coding for the front end and back end. I have a passion for
              creating solutions that are both visually appealing and
              functionally robust.
            </p>
            <p>
              Coding caught my interest at the age of nine when I began
              exploring HTML tags. Despite a pause during my academically
              intense school years and personal commitments, I found my way back
              to coding in Vancouver, feeling as if it was meant to&nbsp;happen.{' '}
            </p>
            <p>
              I am detail-oriented and dedicated, with a strong work ethic. With
              a background in business administration and customer service, I
              excel at collaborating with colleagues and clients to develop
              efficient, scalable, and user-friendly solutions that address
              real-world challenges.
            </p>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  )
}
