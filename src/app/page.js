import Image from 'next/image'
import PageLayout from '../../components/PageLayout'
// import { useRouter } from 'next/router'
// api 4ca128c8b2a143669a0196c156be9d1e

export default function Home({ articles }){
  return (
    <PageLayout title='newsApp - Home'>
      <div className={global.container}>
        {articles.length === 0 && <p>no hay nada</p>}
        {articles.length > 0 && articles.map((article, index) => (
          <div key={index}>
            <Image
              alt={`imagen del articulo ${article.title}`}
              src={article.urlToImage}
              width={450}
              height={300}
              />
              <h2>{article.title}</h2>
              <p>
                {article.description}
              </p>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}

export async function getServerSideProps(){
  const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4ca128c8b2a143669a0196c156be9d1e')
  const { articles } = await response.json()
  return {
    props: {
      articles
    }
  }
}