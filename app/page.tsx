import { Footer, Header } from './components/Layout'
import { Hero, About, Skills, Projects, Contact } from './components/Sections'
import { ScrollToTop } from './components/Buttons'

export default function Home() {
  return (
    <div className="font-monst text-black bg-white dark:bg-black dark:text-white min-h-screen">
      <Header />
      <main className="pt-[5.25rem]">
        <Hero />
        <div className="h-2 bg-gradient-light dark:bg-gradient-dark"></div>
        <About />
        <div className="h-2 bg-gradient-light dark:bg-gradient-dark"></div>
        <Skills />
        <div className="h-2 bg-gradient-light dark:bg-gradient-dark"></div>
        <Projects />
        <div className="h-2 bg-gradient-light dark:bg-gradient-dark"></div>
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
