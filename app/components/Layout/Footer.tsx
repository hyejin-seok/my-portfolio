export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-yellow-200 p-4 text-center text-sm dark:bg-brown sm:flex-row  md:text-base">
      <p>&copy; {new Date().getFullYear()} Hyejin Seok, Web Developer.</p>
      <p>&nbsp;All rights reserved.</p>
    </footer>
  )
}
