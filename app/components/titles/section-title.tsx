import { useTheme } from 'next-themes'

type SectionTitleProps = {
  title: string
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
  const { theme } = useTheme()
  return (
    <div className=" w-fit text-center mx-auto border-double border-b-4 border-t-4 rounded border-yellow-200 py-3 px-5">
      <h2
        className={`${theme === 'dark' ? 'title-style-dark' : 'title-style-light'} text-3xl font-semibold tracking-wide md:text-4xl  `}
      >
        {title}
      </h2>
    </div>
  )
}
