import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { transitionDelay } from '../styles/global'

const heroData = [
  {
    id: uuidv4(),
    img:
      'https://images.unsplash.com/photo-1556056504-5c7696c4c28d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1952&q=80',
  },
  {
    id: uuidv4(),
    img:
      'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
  },
  {
    id: uuidv4(),
    img:
      'https://images.unsplash.com/photo-1506626637585-0802df0d0269?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
  },
  {
    id: uuidv4(),
    img:
      'https://images.unsplash.com/photo-1556764420-e37ef4cdfa5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
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
                ? 'absolute opacity-1 transition-[var(--anim)] z-[1]'
                : 'absolute opacity-0 transition-[var(--anim)]'
            }
            key={obj.id}
          >
            {/* shadow */}
            <div className="absolute w-[100%] h-[100%] opacity-70 bg-black from-sky-700" />
            {/* img */}
            <img
              src={obj.img}
              alt="cover"
              className="w-[100vw] h-[100vh] object-cover bg-center"
            />
          </div>
        )
      })}
    </div>
  )
}

export default Hero
