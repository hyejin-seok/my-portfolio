'use server'
import { Resend } from 'resend'
import { EmailTemplate } from '../app/components/emails'
import { render } from '@react-email/render'

interface State {
  error: string | null
  success: boolean
}
export const sendEmail = async (prevState: State, formData: FormData) => {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const resendEmail = process.env.RESEND_EMAIL

    if (!resendEmail) {
      throw new Error('RESEND_EMAIL environment variable is not defined')
    }

    console.log('Resend Email:', resendEmail)

    const emailContent = render(
      EmailTemplate({
        name,
        email,
        subject,
        message
      })
    )

    console.log('Email content:', emailContent)

    const response = await resend.emails.send({
      from: 'Portfolio Contact <contact@hyejinseok.com>',
      to: resendEmail,
      subject: `New message from ${name} - ${subject}`,
      html: emailContent
    })

    console.log('Resend response:', response)

    return {
      success: true,
      error: null
    }
  } catch (error) {
    console.log('Error sending email:', error)
    return {
      success: false,
      error: (error as Error).message
    }
  }
}
