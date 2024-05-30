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
      className="md:pt-18 mx-auto max-w-container px-4 pb-28 pt-12"
    >
      <SectionTitle title="Get In Touch" />
      <div className="mt-10 flex flex-col items-center justify-center gap-4 font-semibold dark:font-normal md:px-4 lg:mt-14">
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

            {/* 둘 중 비교후 삭제  */}

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

        <div className="w-[95%] rounded-lg border-4 border-double border-yellow-400 px-3 py-4 dark:border-yellow-300 sm:w-[92%] sm:p-4 md:w-[90%] md:p-6 lg:w-[85%] lg:p-8">
          <form
            className="flex flex-col gap-4 text-sm xs:text-base md:text-lg"
            action={sendEmailAction}
          >
            <div className="flex flex-col justify-between md:flex-row">
              <div className="mb-4 flex flex-col md:mb-0 md:w-[44%]">
                <label htmlFor="name" className="mb-2">
                  Name:
                </label>
                <input
                  name="name"
                  type="name"
                  id="name"
                  required
                  placeholder="John Doe"
                  className="h-10 rounded bg-grey  pl-2 text-black placeholder:font-normal"
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
                  className="h-10 rounded bg-grey pl-2 text-black placeholder:font-normal"
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
                className="h-10 rounded bg-grey pl-2 text-black placeholder:font-normal dark:bg-white"
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
                className="min-h-40 rounded bg-grey p-1 text-black placeholder:font-normal dark:bg-white"
              />
            </div>
            <button
              type="submit"
              className="mx-auto mt-5 items-center rounded-lg border-4 border-double border-yellow-400 p-2 font-medium transition-all duration-500 hover:scale-105 hover:bg-yellow-200 hover:text-white dark:border-yellow-300 dark:hover:bg-yellow-100 dark:hover:text-black"
            >
              Send Message
              <FiSend className="inline-block h-5 w-5 pl-1 md:h-6 md:w-6" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
