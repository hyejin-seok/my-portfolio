'use client'
// import Image from 'next/image'
import { useEffect } from 'react'
import { useFormState } from 'react-dom'
import { toast } from 'react-hot-toast'
import { sendEmail } from '../../action'
import { SectionTitle } from '../Titles'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { FiSend } from 'react-icons/fi'

export const Contact = () => {
  const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
    error: null,
    success: false
  })

  useEffect(() => {
    if (sendEmailState.success) {
      toast.success('Your messagewas was sent successfully!')
    }
    if (sendEmailState.error) {
      toast.error('Error! Your meesage was failed to send..')
    }
  }, [sendEmailState])

  return (
    <section
      id="contact"
      className="max-w-container mx-auto px-4 pt-12 pb-28 md:pt-18"
    >
      <SectionTitle title="Get In Touch" />
      <div className="flex flex-col gap-4 items-center justify-center mt-10 lg:mt-14 md:px-4 font-semibold dark:font-normal">
        <div className="mb-7">
          <div className="flex flex-col gap-4 text-xl md:text-2xl text-center px-4">
            <p>I&apos;m currently open to new opportunities.</p>
            <p>
              Whether you have a question or just want to say hi,
              <br />
              I&apos;ll get back to you as soon as possible!
            </p>
          </div>
          <div className="flex gap-10 mt-6 text-4xl sm:text-5xl justify-center">
            <a
              href={'https://www.linkedin.com/in/hyejinseok/'}
              target="_blank"
              rel="noopener noreferrer"
              className="relative transition-transform transform duration-500 hover:scale-110 hover:text-yellow-400 dark:hover:text-yellow-400"
            >
              <SiLinkedin />
            </a>

            {/* 둘 중 비교후 삭제  */}

            <a
              href={'https://github.com/hyejin-seok'}
              target="_blank"
              rel="noopener noreferrer"
              className="relative transition-transform transform duration-500 hover:scale-110 hover:text-yellow-400 dark:hover:text-yellow-400"
            >
              <SiGithub />
              <span className="absolute inset-0 -m-3 border-4 border-double border-transparent rounded-full transition-all duration-500 hover:border-yellow-400 dark:hover:border-yellow-400"></span>
            </a>
          </div>
        </div>

        <div className="w-[95%] sm:w-[92%] md:w-[90%] lg:w-[85%] px-3 py-4 sm:p-4 md:p-6 lg:p-8 border-4 border-double rounded-lg border-yellow-400 dark:border-yellow-300">
          <form
            className="flex flex-col gap-4 text-sm xs:text-base md:text-lg"
            action={sendEmailAction}
          >
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-col mb-4 md:w-[44%] md:mb-0">
                <label htmlFor="name" className="mb-2">
                  Name:
                </label>
                <input
                  name="name"
                  type="name"
                  id="name"
                  required
                  placeholder="John Doe"
                  className="h-10 text-black bg-grey  rounded pl-2 placeholder:font-normal"
                />
              </div>
              <div className="flex flex-col md:w-[54%]">
                <label htmlFor="email" className="mb-2">
                  Email:
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  maxLength={100}
                  placeholder="example@example.com"
                  className="h-10 text-black bg-grey rounded pl-2 placeholder:font-normal"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="subject" className="mb-2">
                Subject:
              </label>
              <input
                name="subject"
                type="subject"
                id="subject"
                required
                placeholder="Job Opportunity"
                className="h-10 text-black bg-grey dark:bg-white rounded pl-2 placeholder:font-normal"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                placeholder="Hi, we would like to work with you! &nbsp;🎉"
                className="min-h-40 text-black bg-grey dark:bg-white rounded p-1 placeholder:font-normal"
              />
            </div>
            <button
              type="submit"
              className="border-4 border-double p-2 items-center rounded-lg mx-auto mt-5 font-medium border-yellow-400 dark:border-yellow-300 transition-all duration-500 hover:scale-105 hover:text-white dark:hover:text-black hover:bg-yellow-200 dark:hover:bg-yellow-100"
            >
              Send Message
              <FiSend className="inline-block pl-1 w-5 h-5 md:w-6 md:h-6" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
