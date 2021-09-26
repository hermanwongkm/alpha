import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/nav/header'
import Footer from '../components/footer/footer'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Alpha</title>
        <meta name="Alpha app" content="Alpha app" />
        <link rel="icon" href="/icon.ico" />
      </Head>

      <Header />
      Hello World
      <Footer />
    </div>
  )
}

export default Home
