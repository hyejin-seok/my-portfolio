'use client'
import { SectionTitle } from '../Titles'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { FadeInUp, SlideInFromLeft } from '../Animations'
import { EmailForm } from '../Emails'

export const Contact = () => {
  return (
    <section
      id="contact"
      className="md:pt-18 mx-auto max-w-container px-4 pb-28 pt-12"
    >
      <SectionTitle title="Get In Touch" />
      <div className="mt-10 flex flex-col items-center justify-center gap-4 font-semibold dark:font-normal md:px-4 lg:mt-14">
        <SlideInFromLeft>
          <div className="mb-7">
            <div className="flex flex-col gap-4 px-4 text-center text-lg font-medium md:text-xl">
              <p>I&apos;m currently open to new opportunities.</p>
              <p>
                Whether you have a question or just want to say hi,
                <br />
                I&apos;ll get back to you as soon as possible!
              </p>
            </div>
            <div className="mt-6 flex justify-center gap-10 text-4xl sm:text-5xl">
              <a
                href={'https://www.linkedin.com/in/hyejinseok/'}
                target="_blank"
                rel="noopener noreferrer"
                className="relative transform transition-transform duration-500 hover:scale-110 hover:text-yellow-400 dark:hover:text-yellow-400"
              >
                <SiLinkedin />
              </a>
              <a
                href={'https://github.com/hyejin-seok'}
                target="_blank"
                rel="noopener noreferrer"
                className="relative transform transition-transform duration-500 hover:scale-110 hover:text-yellow-400 dark:hover:text-yellow-400"
              >
                <SiGithub />
                {/* <span className="absolute inset-0 -m-3 rounded-full border-4 border-double border-transparent transition-all duration-500 hover:border-yellow-400 dark:hover:border-yellow-400"></span> */}
              </a>
            </div>
          </div>
        </SlideInFromLeft>
        <EmailForm />
      </div>
    </section>
  )
}
