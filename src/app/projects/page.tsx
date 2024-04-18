import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/shared/SimpleLayout'
import CardProject from '@/components/projects/CardProject'

const projects = [
  {
    name: 'App.movies',
    description:
      'Aplicación full stack de películas. Desarrollada con Node.js, Express, MongoDB, React, TypeScript, Sass y Tailwind CSS.',
    github: {
      href: 'https://github.com/emalopezperez/TDT-movies-app',
      label: 'TDT-movies-ap.com',
    },
    category: 'Frontend',
  },
  {
    name: 'DolceDress',
    description:
      'Aplicación backend para un e-commerce desarrollado con Node.js, Express y MongoDB ',
    github: {
      href: 'https://github.com/emalopezperez/backend-ecommerce-DolceDress',
      label: 'DolceDress.com',
    },
    category: 'Backend',
  },
  {
    name: 'Restaurante-Online',
    description:
      'Esta es una aplicación frontend creada con React Js, Tailwind css, para un restaurante online.',
    github: {
      href: 'https://github.com/emalopezperez/Restaurante-Online',
      label: 'Restaurante-Online.com',
    },
    category: 'Frontend',
  },
  {
    name: 'Clone AirBnb',
    description:
      'Este proyecto es un clon de la interfaz de usuario de Airbnb, construido con Next.js, Tailwind CSS y Sanity',
    github: {
      href: 'https://github.com/emalopezperez/frontend-clone-AirBnb',
      label: 'clone-air-bnb.com',
    },
    category: 'FullStack',
  },
]

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Proyectos de programacion',
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
