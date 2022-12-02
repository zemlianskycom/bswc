import { useEffect, useState } from 'react'

const SliderData = [
  {
    img:
      'https://images.unsplash.com/photo-1560790043-256df1604bea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
  },
  {
    img:
      'https://images.unsplash.com/photo-1650797885394-a67b8d535f56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
  },
  {
    img:
      'https://images.unsplash.com/photo-1555993539-1732b0258235?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
  },
  {
    img:
      'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
  },
]

function Hero() {
  const [slideIndex, setSlideIndex] = useState(0)

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
    <div className="bg-[var(--primary)] flex justify-center items-center  w-[100vw] h-full overflow-hidden">
      <div className="w-full h-full flex justify-between flex-col items-center py-6">
        <span>2018</span>
        <img className="h-auto translate-y-[-13em]" src="/prev.png" alt="" />
        <span>Main frames</span>
      </div>
    </div>
  )
}

export default Hero
