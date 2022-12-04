import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { transitionDelay } from '../styles/global'

const heroMinData = [
  {
    id: uuidv4(),
    img:
      'https://images.unsplash.com/photo-1527871369852-eb58cb2b54e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3431&q=80',
    country: 'Spain, Barcelona',
  },
  {
    id: uuidv4(),
    img:
      'https://images.unsplash.com/photo-1531752148124-118ba196fc7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
    country: 'USA, Norway',
  },
  {
    id: uuidv4(),
    img:
      'https://www.fcbarcelona.com/fcbarcelona/photo/2022/10/23/95c05ed8-7b4a-4563-87ea-9085f9621385/VIC_1659.jpg',
    country: 'Paris, Sinegal',
  },
  {
    id: uuidv4(),
    img:
      'https://images.unsplash.com/photo-1550591927-391fccf9934b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3432&q=80',
    country: 'Germany, Frankfurt',
  },
]

function HeroMin() {
  const [slideIndex, setSlideIndex] = useState(1)
  const [hover, setHover] = useState(false)

  // per 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      if (slideIndex === heroMinData.length) {
        setSlideIndex(1)
      } else {
        setSlideIndex(slideIndex + 1)
      }
    }, transitionDelay)
    return () => clearInterval(interval)
  }, [slideIndex])

  return (
    <div className="md:max-w-[50vw] w-[90vw] h-[44vh] z-[0] overflow-hidden relative">
      {heroMinData.map((obj, index) => {
        return (
          <div
            style={
              slideIndex === index + 1
                ? { opacity: 1, zIndex: 1 }
                : { opacity: 0 }
            }
            className="absolute transition-[var(--anim)] duration-500"
            key={obj.id}
          >
            <div
              onMouseEnter={() => {
                setHover(true)
              }}
              onMouseLeave={() => {
                setHover(false)
              }}
              className="cursor-pointer relative overflow-hidden gap-2 flex flex-col"
            >
              {/* locate */}
              <div className="overflow-hidden origin-right">
                <p
                  style={
                    hover
                      ? {
                          opacity: 1,
                          transform: 'scale(1.05)',
                        }
                      : {}
                  }
                  className={
                    slideIndex === index + 1
                      ? 'origin-top-left duration-700'
                      : 'origin-top-left translate-y-[3em] duration-700 transition-[var(--anim)]'
                  }
                >
                  {obj.country}
                </p>
              </div>
              {/* img */}
              <div className="overflow-hidden">
                <img
                  src={obj.img}
                  alt="country-cover"
                  style={hover ? { transform: 'scale(1.1)' } : {}}
                  className="w-[100vw] bg-center bg-cover object-cover transition-[var(--anim)] duration-300"
                />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default HeroMin
