import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className="flex justify-center w-[100vw] h-[100vh] ">
      <Head>
        <title>1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <h1 className="abs-c z-[1]">Championship</h1>
      </main>
      <footer className="flex"></footer>
    </div>
  )
}

export default Home
