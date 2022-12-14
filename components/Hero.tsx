import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { transitionDelay } from '../styles/global'

const heroData = [
  {
    id: uuidv4(),
    img:
      'https://images.unsplash.com/photo-1544012607-649ef9fedc21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2372&q=80',
    sparks: '0',
  },
  {
    id: uuidv4(),
    img:
      'https://images.unsplash.com/photo-1645956162922-7caf2bf54eec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
    sparks: '180',
  },
  {
    id: uuidv4(),
    img:
      'https://images.unsplash.com/photo-1637203727700-9d86c74904d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
    sparks: '30',
  },
  {
    id: uuidv4(),
    img:
      'https://images.unsplash.com/photo-1632300951015-42d7df909581?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3425&q=80',
    sparks: '60',
  },
]

function Hero() {
  const [slideIndex, setSlideIndex] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      if (slideIndex === heroData.length) {
        setSlideIndex(1)
      } else {
        setSlideIndex(slideIndex + 1)
      }
    }, transitionDelay)
    return () => clearInterval(interval)
  }, [slideIndex])

  return (
    <div className="abs-c w-[100vw] top-0 z-[-1]">
      {heroData.map((obj, index) => {
        return (
          <div
            className={
              slideIndex === index + 1
                ? 'w-[100vw] absolute opacity-1 transition-[var(--anim)] z-[1] scale-125 duration-700'
                : 'w-[100vw] absolute opacity-0 transition-[var(--anim)] duration-700'
            }
            key={obj.id}
          >
            {/* video */}
            <div
              style={
                slideIndex === index + 1
                  ? { filter: `hue-rotate(${obj.sparks}deg)` }
                  : {}
              }
              className="z-[1] absolute top-0 mix-blend-lighten transition-[var(--anim)] duration-300"
            >
              <video
                className="w-[stretch] h-[stretch]"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/video/sparks4.mp4" type="video/mp4" />
              </video>
            </div>
            {/* shadow */}
            <div className="z-[1] absolute w-[100vw] h-[100vh] opacity-40 bg-black" />
            {/* img */}
            <img
              style={{
                animation: 'zoom linear 40s infinite',
              }}
              src={obj.img}
              alt="cover"
              className="z-[3] h-[100vh] w-[100vw] object-cover opacity-50"
            />
          </div>
        )
      })}
    </div>
  )
}

export default Hero
