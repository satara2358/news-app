import Head from "next/head"
import Link from "next/link"
export default function PageLayout({children}){
  return(
    <>
    <Head>
      <title>NewApp</title>
      <meta  name="description" content="newapp - blallabla bla"/>
      <link rel="icon" href=""/>
    </Head>
    <header>
      <div>
        <Link href='/'>newsapi</Link>
      </div>
      <div>
        <Link href='../pages/about.js'>ir About</Link>
      </div>
    </header>
    <main>
      {children}
    </main>
    <style>{`
    header {
      display : flex;
      justify-content: space-between;
      padding: 20px;
      }
    `}</style>
    </>
  )
}