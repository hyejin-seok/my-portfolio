'use client'
import { useEffect, useRef, useState } from 'react'
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

  const [isSubmitting, setIsSubmitting] = useState(false)

  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const subjectRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (sendEmailState.success) {
      toast.success('Thank you! Your message was sent successfully!')
      clearFormInputs()
    }
    if (sendEmailState.error) {
      toast.error('Error! Your meesage failed to send.')
    }
    setIsSubmitting(false)
  }, [sendEmailState])

  const clearFormInputs = () => {
    nameRef.current && (nameRef.current.value = '')
    emailRef.current && (emailRef.current.value = '')
    subjectRef.current && (subjectRef.current.value = '')
    messageRef.current && (messageRef.current.value = '')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData()
    formData.append('name', nameRef.current?.value || '')
    formData.append('email', emailRef.current?.value || '')
    formData.append('subject', subjectRef.current?.value || '')
    formData.append('message', messageRef.current?.value || '')

    sendEmailAction(formData)
  }

  return (
    <AnimationWrapper
      variants={fadeInUPVar}
      className="w-[95%] rounded-lg border-4 border-double border-yellow-400 px-3 py-4 dark:border-yellow-300 sm:w-[92%] sm:p-4 md:w-[90%] md:p-6 lg:w-[85%] lg:p-8"
    >
      <form
        className="flex flex-col gap-4 text-sm xs:text-base md:text-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col justify-between md:flex-row">
          <div className="mb-4 flex flex-col md:mb-0 md:w-[44%]">
            <label htmlFor="name" className="mb-2">
              Name:
            </label>
            <input
              name="name"
              type="name"
              ref={nameRef}
              id="name"
              required
              placeholder="John Doe"
              disabled={isSubmitting}
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
              ref={emailRef}
              id="email"
              required
              maxLength={100}
              placeholder="example@example.com"
              disabled={isSubmitting}
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
            ref={subjectRef}
            id="subject"
            required
            placeholder="Job Opportunity"
            disabled={isSubmitting}
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
            ref={messageRef}
            required
            placeholder="Hi, we would like to work with you! &nbsp;🎉"
            disabled={isSubmitting}
            className="min-h-40 rounded bg-grey p-1 text-black placeholder:font-normal dark:bg-white"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="mx-auto mt-5 items-center rounded-lg border-4 border-double border-yellow-400 p-2 font-medium transition-all duration-500 hover:scale-105 hover:bg-yellow-400 hover:text-white dark:border-yellow-300 dark:hover:bg-yellow-100 dark:hover:text-black"
        >
          Send Message
          <FiSend className="inline-block h-5 w-5 pl-1 md:h-6 md:w-6" />
        </button>
      </form>
    </AnimationWrapper>
  )
}
