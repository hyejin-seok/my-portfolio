import { useTheme } from 'next-themes'

type SectionTitleProps = {
  title: string
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
  const { theme } = useTheme()
  return (
    <div className="mx-auto w-fit rounded border-b-4 border-t-4 border-double border-yellow-400 px-5 py-3 text-center dark:border-yellow-300">
      <h2
        className={`${theme === 'dark' ? 'title-style-dark' : 'title-style-light'} text-2xl font-semibold tracking-wide md:text-3xl  `}
      >
        {title}
      </h2>
    </div>
  )
}
