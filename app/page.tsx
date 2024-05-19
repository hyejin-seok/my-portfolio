import { Header } from './components/layout'
import { Hero, AboutMe } from './components/sections'

export default function Home() {
  return (
    <div className="font-monst text-black bg-white dark:bg-black dark:text-white min-h-screen">
      <Header />
      <main className="pt-20 px-4 max-w-container mx-auto">
        <Hero />
        <AboutMe />
      </main>
    </div>
  )
}
