import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mohammed Ali</title>
        <meta name="portfolio weebsite" content="portfolio weebsite" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main>
        <h1 className='font-bold text-slate-700'>Main</h1>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Home
