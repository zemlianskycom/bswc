import Burger from '../icons/Burger'
import Close from '../icons/Close'

function Header({ open, setOpen }: { open: any; setOpen: any }) {
  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className="z-[2] h-[2em] overflow-hidden cursor-pointer opacity-75 hover:opacity-100 hover:scale-110 duration-300 transition-[var(--anim)]"
      >
        <div
          className={
            open
              ? 'flex flex-col items-center gap-[2em] transition-[var(--anim)] duration-700'
              : 'flex flex-col items-center gap-[2em] translate-y-[-4em] transition-[var(--anim)] duration-700'
          }
        >
          <Burger />
          <Close />
        </div>
      </div>
      <div
        style={
          open
            ? { height: 0, backdropFilter: 'blur(40px)' }
            : { height: '100vh', backdropFilter: 'blur(40px)' }
        }
        className="absolute top-0 left-0 right-0 w-[100vw] duration-500 bg-black opacity-90 z-[1] transition-[var(--anim)]"
      ></div>
    </>
  )
}

export default Header
