import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import HeroMin from '../components/HeroMin'
import LineRunner from '../components/LineRunner'
import League from '../icons/League'

import { motion } from 'framer-motion'
import { anim } from '../styles/global'
import Burger from '../icons/Burger'

const Home: NextPage = () => {
  return (
    <div className="flex justify-center w-[100vw] h-[100vh] overflow-hidden">
      <Head>
        <title>BSWC - 18</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute flex w-full py-7 justify-end px-6">
        <div className="cursor-pointer opacity-75 hover:opacity-100 hover:scale-110 duration-300 transition-[var(--anim)]">
          <Burger />
        </div>
      </div>
      <main className="relative py-6">
        {/* content */}
        <div className="flex flex-col justify-between h-[stretch]">
          {/* up */}
          <div className=" flex flex-col gap-0 items-center ">
            <span>2018</span>
            <HeroMin />
          </div>
          {/* down */}
          <div className="flex flex-col gap-8 items-center">
            <div className="opacity-50 origin-top-left">
              <League />
            </div>
            <span>Main frames</span>
          </div>
        </div>
        <Hero />
        {/* title promo */}
        <h1 className="abs-c">Championship</h1>
        <LineRunner />
      </main>
      <Footer />
    </div>
  )
}

export default Home
