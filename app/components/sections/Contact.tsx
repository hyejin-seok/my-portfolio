'use client'
// import Image from 'next/image'
import { SectionTitle } from '../titles'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { FiSend } from 'react-icons/fi'

export const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value
    }
    const JSONdata = JSON.stringify(data)
    const endpoint = '/api/send'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json'
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata
    }

    const response = await fetch(endpoint, options)
    const resData = await response.json()

    if (response.status === 200) {
      console.log('Message sent.')
      setEmailSubmitted(true)
    }
  }
  return (
    <section id="contact" className="mt-40 md:mt-60 ">
      <SectionTitle title="GET IN TOUCH" />
      <div className="flex flex-col gap-4 items-center justify-center lg:flex-row mt-24 lg:mt-32 pb-40 md:px-4 font-semibold dark:font-normal">
        <div className="w-[80%] lg:w-[40%] mb-12 lg:mb-0">
          <div className="flex flex-col gap-4 text-xl text-center">
            <p>I&apos;m currently open to new opportunities.</p>
            <p>
              Whether you have a question or just want to say hi, I&apos;ll do
              my best to get back to you!
            </p>
          </div>
          <div className="flex gap-8 mt-8 text-3xl justify-center">
            <a
              href={'https://www.linkedin.com/in/hyejinseok/'}
              target="_blank"
              rel="noopener noreferrer"
              className="relative transition-transform transform duration-500 hover:scale-110 hover:text-yellow-200"
            >
              <SiLinkedin />
              <span className="absolute inset-0 -m-2  border-2 border-transparent rounded-full transition-all duration-500 hover:border-yellow-200"></span>
            </a>
            <a
              href={'https://github.com/hyejin-seok'}
              target="_blank"
              rel="noopener noreferrer"
              className="relative transition-transform transform duration-500 hover:scale-110 hover:text-yellow-200"
            >
              <SiGithub />
              <span className="absolute inset-0 -m-2 border-2 border-transparent rounded-full transition-all duration-500 hover:border-yellow-200"></span>
            </a>
          </div>
        </div>

        <div className="w-[95%] lg:w-[60%] p-4 xs:p-6 xl:p-8 border-4 dark:border-2 rounded-lg border-yellow-200">
          <form
            className="flex flex-col gap-4 text-sm xs:text-base md:text-lg"
            onSubmit={handleSubmit}
          >
            <div className="flex  justify-between ">
              <div className="flex flex-col w-[44%]">
                <label htmlFor="name" className="mb-2">
                  Name:
                </label>
                <input
                  name="name"
                  type="name"
                  id="name"
                  required
                  placeholder="John Doe"
                  className="h-10 text-black bg-grey dark:bg-white rounded pl-2 placeholder:font-normal"
                />
              </div>
              <div className="flex flex-col w-[54%]">
                <label htmlFor="email" className="mb-2">
                  Email:
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  placeholder="example@example.com"
                  className="h-10 text-black bg-grey dark:bg-white rounded pl-2 placeholder:font-normal"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="subject">Subject:</label>
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
              <label htmlFor="message">Message</label>
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
              className="border-2 p-2 items-center rounded-lg mx-auto my-5 border-yellow-200"
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
