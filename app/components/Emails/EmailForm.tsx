'use client'
import { useEffect } from 'react'
import { useFormState } from 'react-dom'
import { toast } from 'react-hot-toast'
import { FiSend } from 'react-icons/fi'
import { sendEmail } from '../../action'
import { AnimationWrapper, fadeInUPVar } from '../Animations'

export const EmailForm = () => {
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
    <AnimationWrapper
      variants={fadeInUPVar}
      className="w-[95%] rounded-lg border-4 border-double border-yellow-400 px-3 py-4 dark:border-yellow-300 sm:w-[92%] sm:p-4 md:w-[90%] md:p-6 lg:w-[85%] lg:p-8"
    >
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
          className="mx-auto mt-5 items-center rounded-lg border-4 border-double border-yellow-400 p-2 font-medium transition-all duration-500 hover:scale-105 hover:bg-yellow-400 hover:text-white dark:border-yellow-300 dark:hover:bg-yellow-100 dark:hover:text-black"
        >
          Send Message
          <FiSend className="inline-block h-5 w-5 pl-1 md:h-6 md:w-6" />
        </button>
      </form>
    </AnimationWrapper>
  )
}
