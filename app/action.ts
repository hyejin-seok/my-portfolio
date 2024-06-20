'use server'
import { Resend } from 'resend'
import { EmailTemplate } from '../app/components/emails'

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

    await resend.emails.send({
      from: `Hyejin <${resendEmail}>`,
      to: email,
      subject: 'Form Submission from my portfolio',
      react: EmailTemplate({
        name,
        email,
        subject,
        message
      })
    })
    return {
      error: null,
      success: true
    }
  } catch (error) {
    console.log(error)
    return {
      error: (error as Error).message,
      success: false
    }
  }
}
