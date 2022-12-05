import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import HeroMin from '../components/HeroMin'
import LineRunner from '../components/LineRunner'
import League from '../icons/League'

import Header from '../components/Header'
import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import DrawSVGPlugin from 'gsap'
import Championship from '../icons/Championship'

const Home: NextPage = () => {
  const [open, setOpen] = useState(true)
  const [hover, setHover] = useState(false)

  gsap.registerPlugin(DrawSVGPlugin)

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.7, ease: 'Back.easeOut', opacity: 1 },
    })
    tl.to('.champ', { duration: 1, stagger: 0.1, drawSVG: 0 })
  }, [])

  return (
    <div className="flex justify-center w-[100vw] h-[100vh] overflow-hidden">
      <Head>
        <title>BSWC - 18</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute flex w-full py-7 justify-end px-6">
        <Header open={open} setOpen={setOpen} />
      </div>
      <main className="relative py-6">
        {/* content */}
        <div className="flex flex-col justify-between h-[stretch]">
          {/* up */}
          <div className=" flex flex-col gap-0 items-center ">
            <span
              style={
                open
                  ? {}
                  : {
                      transform: 'translateY(17vh)',
                    }
              }
              className="z-[1] tracking-widest text-[.65em]"
            >
              Main frames • Photoservice
            </span>
            <HeroMin hover={hover} setHover={setHover} />
          </div>
          {/* down */}
          <div className="flex flex-col gap-6 items-center">
            <div className="opacity-50 origin-top-left">
              <League color={'white'} />
            </div>
            <span className="z-[1] tracking-widest text-[.65em]">2022</span>
          </div>
        </div>
        <Hero />
        <LineRunner open={open} />
        {/* title promo */}
        <div className="z-[10] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div
            style={
              open
                ? { transform: 'scale(.65)' }
                : {
                    transform: 'scale(.3) translateY(-120vh)',
                  }
            }
            className="champ transition-[var(--anim)] duration-500 "
          >
            {/* <Championship /> */}
            <h1
              style={open ? {} : {}}
              className="leading-[.8em] whitespace-nowrap"
            >
              Big shots world cup
            </h1>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
