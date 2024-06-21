import { Html, Heading, Text } from '@react-email/components'

export const EmailTemplate = ({
  name,
  email,
  subject,
  message
}: {
  name: string
  email: string
  subject: string
  message: string
}) => {
  return (
    <Html lang="en">
      <Heading as="h1">New Form Submission from My Portfolio</Heading>
      <Text>A form has just been submited. Here are the details:</Text>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Subject: {subject}</Text>
      <Text>Message: {message}</Text>
    </Html>
  )
}
