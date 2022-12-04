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
import Navigate from '../components/Navigate'
import { useState } from 'react'
import Championship from '../icons/Championship'

const Home: NextPage = () => {
  const [open, setOpen] = useState(true)

  return (
    <div className="flex justify-center w-[100vw] h-[100vh] overflow-hidden">
      <Head>
        <title>BSWC - 18</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute flex w-full py-7 justify-end px-6">
        <Navigate open={open} setOpen={setOpen} />
      </div>
      {/* video */}
      <div className="absolute top-0 w-[stretch] h-[stretch] mix-blend-lighten">
        <video autoPlay loop muted playsInline>
          <source src="/video/sparks2.mp4" type="video/mp4" />
        </video>
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="scale-75">
            <Championship />
          </div>
        </div>
        <LineRunner />
      </main>
      <Footer />
    </div>
  )
}

export default Home
