import { useState } from 'react'
import Burger from '../icons/Burger'

function Navigate() {
  const [open, setOpen] = useState(true)

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className="z-[2] cursor-pointer opacity-75 hover:opacity-100 hover:scale-110 duration-300 transition-[var(--anim)]"
      >
        <Burger />
      </div>
      <div
        style={open ? { height: 0 } : { height: '100vh' }}
        className="absolute top-0 left-0 right-0 w-[100vw] duration-500 bg-black z-[1] transition-[var(--anim)]"
      ></div>
    </>
  )
}

export default Navigate
