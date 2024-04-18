import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/shared/SimpleLayout'
import CardProject from '@/components/projects/CardProject'

const projects = [
  {
    name: 'app.movies',
    description:
      'Aplicación full stack de películas. Desarrollada con Node.js, Express, MongoDB, React, TypeScript, Sass y Tailwind CSS.',
    github: {
      href: 'https://github.com/emalopezperez/TDT-movies-app',
      label: 'TDT-movies-ap.com',
    },
    category: 'Frontend',
  },
  {
    name: 'app.movies',
    description:
      'Aplicación full stack de películas. Desarrollada con Node.js, Express, MongoDB, React, TypeScript, Sass y Tailwind CSS.',
    github: {
      href: 'https://github.com/emalopezperez/TDT-movies-app',
      label: 'TDT-movies-ap.com',
    },
    category: 'Frontend',
  },
  {
    name: 'app.movies',
    description:
      'Aplicación full stack de películas. Desarrollada con Node.js, Express, MongoDB, React, TypeScript, Sass y Tailwind CSS.',
    github: {
      href: 'https://github.com/emalopezperez/TDT-movies-app',
      label: 'TDT-movies-ap.com',
    },
    category: 'Frontend',
  },
  {
    name: 'app.movies',
    description:
      'Aplicación full stack de películas. Desarrollada con Node.js, Express, MongoDB, React, TypeScript, Sass y Tailwind CSS.',
    github: {
      href: 'https://github.com/emalopezperez/TDT-movies-app',
      label: 'TDT-movies-ap.com',
    },
    category: 'FullStack',
  },
  {
    name: 'app.movies',
    description:
      'Aplicación full stack de películas. Desarrollada con Node.js, Express, MongoDB, React, TypeScript, Sass y Tailwind CSS.',
    github: {
      href: 'https://github.com/emalopezperez/TDT-movies-app',
      label: 'TDT-movies-ap.com',
    },
    category: 'Backend',
  },
]

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects programing',
}

export default async function Projects() {
  return (
    <SimpleLayout
      title="Proyectos"
      intro="Proyectos personales y trabajos frelance"
    >
      <ul className="grid grid-cols-1 gap-x-20 gap-y-20  sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <CardProject project={project} key={project.name} />
        ))}
      </ul>
    </SimpleLayout>
  )
}
