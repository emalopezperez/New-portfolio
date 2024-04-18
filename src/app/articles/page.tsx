import { type Metadata } from 'next'

import { Card } from '@/components/shared/Card'
import { SimpleLayout } from '@/components/shared/SimpleLayout'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Leer articulo</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Este espacio está diseñado con el propósito de compartir y aportar conocimiento sobre programación y tecnología. Aquí encontrarás artículos, apuntes y experiencias relacionadas con lo que aprendo en la programación. ¡Espero que las publicaciones te sean de ayuda! Si deseas conocer más sobre mí, visita mi sitio web personal.',
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()
  return (
    <SimpleLayout
      title="Articulos de programación y Tecnología."
      intro="Este espacio está diseñado con el propósito de compartir y aportar conocimiento sobre programación y tecnología. Aquí encontrarás artículos, apuntes y experiencias relacionadas con lo que aprendo en la programación. ¡Espero que las publicaciones te sean de ayuda! Si deseas conocer más sobre mí, visita mi sitio web personal."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
