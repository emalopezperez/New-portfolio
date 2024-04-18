import Image from 'next/image'
import { Container } from '@/components/shared/Container'
import SocialLink from '@/components/home/SocialLink'
import Newsletter from '@/components/home/Newsletter'
import Article from '@/components/home/Article'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/shared/SocialIcons'

import portraitImage from '@/images/portrait.jpg'

import { getAllArticles } from '@/lib/articles'

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="flex w-full flex-col justify-between  gap-0 lg:flex-row lg:gap-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Soy Emanuel López, desarrollador de Software.
            </h1>

            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              Soy un desarrollador de software con experiencia en proyectos
              personales y trabajos freelance, especializado en el desarrollo
              front-end y con conocimientos en backend. He trabajado en
              colaboración con diversos clientes para desarrollar y ofrecer
              soluciones eficientes. Durante estas colaboraciones, he aplicado
              una amplia variedad de tecnologías y herramientas, adaptándome a
              las necesidades específicas de cada proyecto para garantizar su
              éxito.
            </p>

            <div className="mt-6 flex gap-6">
              <SocialLink href="#" aria-label="Follow on X" icon={XIcon} />
              <SocialLink
                href="#"
                aria-label="Follow on Instagram"
                icon={InstagramIcon}
              />
              <SocialLink
                href="https://github.com/emalopezperez"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
              />
              <SocialLink
                href="https://www.linkedin.com/in/emanuel-lopez-software-developer"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
              />
            </div>
          </div>

          <div className=" mt-8 h-[200px] w-[200px] lg:mt-0 lg:h-full lg:w-full">
            <Image
              src={portraitImage}
              alt=""
              className="aspect-square w-full rotate-3 rounded-2xl bg-zinc-100 object-cover shadow-md dark:bg-zinc-800"
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
          </div>
        </div>
      </Container>
    </>
  )
}
