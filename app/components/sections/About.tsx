'use client'
import Image from 'next/image'
import { SectionTitle } from '../titles'

export const About = () => {
  return (
    <section id="about" className="mt-40 md:mt-60 ">
      <SectionTitle title="ABOUT HYEJIN" />
      <div className="flex flex-col items-center lg:flex-row md:justify-center mt-20 lg:mt-28 pb-28">
        <div className="flex flex-col gap-6 text-xl lg:ml-10 w-[93%] xs:w-[85%] lg:w-[50%] font-medium dark:font-normal bg-yellow-100 dark:bg-brown p-5 sm:p-8 rounded-lg">
          <p>
            &nbsp;I am a full stack web developer with experience in both design
            and coding for the front end and back end. I have a passion for
            creating solutions that are both visually appealing and functionally
            robust.
          </p>
          <p>
            &nbsp;Coding caught my interest at the age of nine when I began
            exploring HTML tags. Despite a pause during my academically intense
            school years and personal commitments, I found my way back to coding
            in Vancouver, feeling as if it was meant to happen.{' '}
          </p>
          <p>
            &nbsp;I am detail-oriented and dedicated, with a strong work ethic.
            With a background in business administration and customer service, I
            excel at collaborating with colleagues and clients to develop
            efficient, scalable, and user-friendly solutions that address
            real-world challenges.
          </p>
        </div>
        <div className="w-[60%] lg:w-[50%] lg:order-last order-first mb-16 lg:mb-0">
          <Image
            src="/images/about-me.jpeg"
            alt="my picture"
            width="400"
            height="400"
            className="mx-auto h-auto rounded-xl ring-4 ring-yellow-200"
          />
        </div>
      </div>
    </section>
  )
}
