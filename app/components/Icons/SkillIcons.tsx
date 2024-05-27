import {
  SiExpress,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiVite,
  SiJquery,
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiBootstrap,
  SiReactquery,
  SiJest,
  SiNodedotjs,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiMongoose,
  SiPrisma,
  SiEjs,
  SiSocketdotio,
  SiGit,
  SiGithub,
  SiDocker,
  SiFigma,
  SiSwagger,
  SiPostman,
  SiWebpack,
  SiStorybook,
  SiCanva,
  SiSlack
} from 'react-icons/si'
import { SkillsType } from '@/app/types'

type SkillCategory = {
  type: SkillsType
}

export const SkillIcons = ({ type }: SkillCategory) => {
  const frontEndSkills = [
    {
      icon: <SiTypescript size="100%" />,
      name: 'TypeScript'
    },
    {
      icon: <SiJavascript size="100%" />,
      name: 'JavaScript'
    },
    {
      icon: <SiReact size="100%" />,
      name: 'React'
    },
    {
      icon: <SiNextdotjs size="100%" />,
      name: 'Next.js'
    },
    {
      icon: <SiRedux size="100%" />,
      name: 'Redux'
    },
    {
      icon: <SiVite size="100%" />,
      name: 'Vite'
    },
    {
      icon: <SiReactquery size="100%" />,
      name: 'React Query'
    },
    {
      icon: <SiJquery size="100%" />,
      name: 'jQuery'
    },
    {
      icon: <SiJest size="100%" />,
      name: 'Jest'
    },
    {
      icon: <SiHtml5 size="100%" />,
      name: 'HTML5'
    },
    {
      icon: <SiCss3 size="100%" />,
      name: 'CSS3'
    },
    {
      icon: <SiSass size="100%" />,
      name: 'Sass'
    },
    {
      icon: <SiTailwindcss size="100%" />,
      name: 'Tailwind CSS'
    },
    {
      icon: <SiBootstrap size="100%" />,
      name: 'Bootstrap'
    }
  ]

  const backEndSkills = [
    {
      icon: <SiNodedotjs size="100%" />,
      name: 'Node.js'
    },
    {
      icon: <SiExpress size="100%" />,
      name: 'Express.js'
    },
    {
      icon: <SiNestjs size="100%" />,
      name: 'NestJS'
    },
    {
      icon: <SiMongodb size="100%" />,
      name: 'MongoDB'
    },
    {
      icon: <SiMongoose size="100%" />,
      name: 'Mongoose'
    },
    {
      icon: <SiPostgresql size="100%" />,
      name: 'PostgreSQL'
    },
    {
      icon: <SiPrisma size="100%" />,
      name: 'Prisma'
    },
    {
      icon: <SiEjs size="100%" />,
      name: 'EJS'
    },
    {
      icon: <SiSocketdotio size="100%" />,
      name: 'Socket.IO'
    }
  ]

  const devToolsSkills = [
    {
      icon: <SiGit size="100%" />,
      name: 'Git'
    },
    {
      icon: <SiGithub size="100%" />,
      name: 'Github'
    },
    {
      icon: <SiDocker size="100%" />,
      name: 'Docker'
    },
    {
      icon: <SiPostman size="100%" />,
      name: 'Postman'
    },
    {
      icon: <SiFigma size="100%" />,
      name: 'Figma'
    },
    {
      icon: <SiWebpack size="100%" />,
      name: 'Webpack'
    },
    {
      icon: <SiStorybook size="100%" />,
      name: 'Storybook'
    },
    {
      icon: <SiCanva size="100%" />,
      name: 'Canva'
    }
  ]

  const getSkillsByCategory = (category: string) => {
    switch (category) {
      case 'Front-end':
        return frontEndSkills
      case 'Back-end':
        return backEndSkills
      case 'Dev Tools':
        return devToolsSkills
      default:
        return []
    }
  }

  return (
    <ul className="mt-5 flex w-[90%] flex-wrap justify-center gap-6 sm:gap-8 md:w-[80%] lg:w-[70%]">
      {getSkillsByCategory(type).map((skill) => (
        <li
          key={skill.name}
          className="group relative flex h-14 w-14 rounded-xl bg-yellow-200 p-2 text-sm text-white transition-all duration-500 hover:scale-110 hover:bg-brown dark:bg-yellow-100 dark:text-black dark:hover:bg-yellow-400 sm:text-base"
        >
          {skill.icon}
          <span
            className="absolute left-1/2 mx-auto mt-6 w-max -translate-x-1/2  translate-y-full px-2 text-black
    opacity-0 transition-opacity duration-500 group-focus-within:opacity-100 group-hover:opacity-100 dark:text-white sm:mt-5"
          >
            {skill.name}
          </span>
        </li>
      ))}
    </ul>
  )
}
