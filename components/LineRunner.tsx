import TwoX from '../icons/TwoX'

function LineRunner({ open }: { open: any }) {
  return (
    <div
      style={
        open
          ? {
              animation: 'ticker linear 100s infinite alternate',
            }
          : {
              animation: 'ticker-alternate linear 100s infinite alternate',
            }
      }
      className="transition-[var(--anim)] duration-500 flex z-[1] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-20"
    >
      <TwoX />
      <TwoX />
      <TwoX />
      <TwoX />
      <TwoX />
      <TwoX />
      <TwoX />
      <TwoX />
    </div>
  )
}

export default LineRunner
