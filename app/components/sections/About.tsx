'use client'
import Image from 'next/image'
import { SectionTitle } from '../Titles'

export const About = () => {
  return (
    <section
      id="about"
      className="pt-12 pb-28 md:pt-18 md:pb-40 px-4 bg-yellow-100 dark:bg-cocoa"
    >
      <div className="max-w-container mx-auto">
        <SectionTitle title="About Hyejin" />
        <div className="flex flex-col items-center gap-10 lg:flex-row md:justify-center mt-12 lg:mt-20">
          <div className="w-[60%] lg:w-[45%]">
            <Image
              src="/images/about-me.jpeg"
              alt="my picture"
              width="400"
              height="400"
              className="mx-auto h-auto rounded-xl ring-4 ring-yellow-200"
            />
          </div>
          <div className="flex flex-col gap-5 text-lg md:text-xl w-[95%] xs:w-[80%] lg:w-[45%] font-medium dark:font-normal rounded-lg">
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
              to coding in Vancouver, feeling as if it was meant to happen.{' '}
            </p>
            <p>
              I am detail-oriented and dedicated, with a strong work ethic. With
              a background in business administration and customer service, I
              excel at collaborating with colleagues and clients to develop
              efficient, scalable, and user-friendly solutions that address
              real-world challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
