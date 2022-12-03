import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const SliderData = [
  {
    id: uuidv4(),
    img:
      'https://images.unsplash.com/photo-1560790043-256df1604bea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
  },
  {
    id: uuidv4(),
    img:
      'https://images.unsplash.com/photo-1650797885394-a67b8d535f56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
  },
  {
    id: uuidv4(),
    img:
      'https://images.unsplash.com/photo-1555993539-1732b0258235?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
  },
  {
    id: uuidv4(),
    img:
      'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
  },
]

function Hero() {
  const [slideIndex, setSlideIndex] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      if (slideIndex === SliderData.length) {
        setSlideIndex(1)
      } else {
        setSlideIndex(slideIndex + 1)
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [slideIndex])

  return (
    <div className="w-[100vw]">
      {SliderData.map((obj, index) => {
        return (
          <div
            className={
              slideIndex === index + 1
                ? 'absolute opacity-1 transition duration-700 z-[1]'
                : 'absolute opacity-0 transition duration-700'
            }
            key={obj.id}
          >
            <div className="absolute w-[100%] h-[100%] bg-[var(--primary)] opacity-95" />
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
