import { Card } from '../shared/Card'
import { GitHubIcon } from '@/components/shared/SocialIcons'
import { SquareCode } from 'lucide-react'
import { Projects } from '@/interfaces/projects/projects'

interface PropsProject {
  project: Projects
  key: string | number
}

const CardProject = ({ project, key }: PropsProject) => {
  const { name, description, github, category } = project

  return (
    <Card as="li" key={key} className="relative ">
      <span
        className={`absolute right-0 top-0 z-10 rounded-sm px-2 py-1 text-[12px] text-zinc-800 shadow-sm ${
          category === 'Frontend'
            ? 'bg-[#ffe2db]'
            : category === 'FullStack'
              ? 'bg-[#def4ff]'
              : 'bg-[#f8e7f4]'
        }`}
      >
        {category}
      </span>

      <div className="z-10 ">
        <SquareCode className="" />
      </div>

      <h2 className="mt-8 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        <Card.Link href={github.href}>{name}</Card.Link>
      </h2>
      <Card.Description>
        <div className="h-[70px]">{description}</div>
      </Card.Description>
      <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
        <GitHubIcon className=" h-6 w-6" />
        <span className="ml-2">{github.label}</span>
      </p>
    </Card>
  )
}

export default CardProject
