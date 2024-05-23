export const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row items-center justify-center p-4 text-center text-sm md:text-base border-t-2  border-yellow-300">
      <p>&copy; {new Date().getFullYear()} Hyejin Seok, Web Developer.</p>
      <p>&nbsp;All rights reserved.</p>
    </footer>
  )
}
