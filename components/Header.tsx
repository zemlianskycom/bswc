import Burger from '../icons/Burger'

function Header({ open, setOpen }: { open: any; setOpen: any }) {
  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className="z-[2] cursor-pointer opacity-75 hover:opacity-100 hover:scale-110 duration-300 transition-[var(--anim)]"
      >
        <Burger />
      </div>
      <div
        style={
          open
            ? { height: 0, backdropFilter: 'blur(40px)' }
            : { height: '100vh', backdropFilter: 'blur(40px)' }
        }
        className="absolute top-0 left-0 right-0 w-[100vw] duration-500 bg-black opacity-100 z-[1] transition-[var(--anim)]"
      ></div>
    </>
  )
}

export default Header
