import { useState } from 'react'
import TwoX from '../icons/TwoX'

function LineRunner() {
  const [repeat, setRepeat] = useState(false)

  return (
    <div
      style={{
        animation: 'ticker linear 100s infinite',
      }}
      className="absolute top-1/2 z-[-1] flex opacity-40"
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
