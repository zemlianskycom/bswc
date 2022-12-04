import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { transitionDelay } from '../styles/global'

const heroMinData = [
  {
    id: uuidv4(),
    img:
      'https://e3.365dm.com/22/12/1600x900/skynews-germany-fans-world-cup_5984409.jpg?20221202091926',
    country: 'Barcelona',
  },
  {
    id: uuidv4(),
    img:
      'https://images.unsplash.com/photo-1524748969064-cf3dabd7b84d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2150&q=80',
    country: 'Norway',
  },
  {
    id: uuidv4(),
    img:
      'https://www.fcbarcelona.com/fcbarcelona/photo/2022/10/23/95c05ed8-7b4a-4563-87ea-9085f9621385/VIC_1659.jpg',
    country: 'Sinegal',
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
            className={
              slideIndex === index + 1
                ? 'absolute opacity-1 transition-[var(--anim)] duration-500 z-[1]'
                : 'absolute opacity-0 transition-[var(--anim)] duration-500'
            }
            key={obj.id}
          >
            <div className="relative overflow-hidden gap-2 flex flex-col">
              {/* img */}
              <div className="overflow-hidden">
                <p
                  className={
                    slideIndex === index + 1
                      ? 'duration-1000'
                      : 'translate-y-[3em] duration-1000 transition-[var(--anim)]'
                  }
                >
                  {obj.country}
                </p>
              </div>

              <img
                src={obj.img}
                alt="country-cover"
                className="object-cover w-[100vw] h-[100vh]"
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default HeroMin
