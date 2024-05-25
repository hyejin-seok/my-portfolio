import Image from 'next/image'
import { ProjectType } from '@/app/data'
import { SiGithub } from 'react-icons/si'

type ProjectCardProps = {
  project: ProjectType
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const reverseLayout = project.id % 2 === 0

  return (
    <article>
      <div className={`flex ${reverseLayout ? 'flex-row-reverse' : ''} `}>
        <figure className="w-1/2">
          {' '}
          <Image
            // src={`/images/projects/${project.images[0]}`}
            src={'/images/test2.png'}
            alt={`Image of ${project.title} project`}
            width={1200}
            height={800}
            className={`h-full w-full border-8 border-yellow-300 ${reverseLayout ? 'rounded-r-lg' : 'rounded-l-lg'} `}
          />
        </figure>
        <div
          className={`w-1/2 flex flex-col gap-6 bg-black p-8 ${reverseLayout ? 'rounded-l-lg' : 'rounded-r-lg'}`}
        >
          <header className="flex flex-col gap-4">
            <h3 className="text-2xl text-center font-semibold">
              {project.title}
            </h3>
            <div className="flex justify-center gap-4">
              {project.techStacks.map((stack) => (
                <div
                  className="border-2 border-yellow-300 w-fit rounded-lg p-1"
                  key={stack}
                >
                  {stack}
                </div>
              ))}
            </div>
          </header>
          <p className="text-lg">{project.description}</p>
          <footer className="flex justify-center items-center gap-4">
            <p className="text-lg">Source URL:</p>
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform duration-500 hover:scale-110 hover:text-yellow-400 dark:hover:text-yellow-400"
            >
              <SiGithub className="text-3xl" />
            </a>
          </footer>
        </div>
      </div>
    </article>
  )
}
