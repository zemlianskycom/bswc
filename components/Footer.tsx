import Link from 'next/link'

function Footer() {
  return (
    <footer className="absolute bottom-4 right-5 flex gap-2">
      <Link href="http://zemliansky.com">
        <h6 className="">Zemliansky</h6>
      </Link>
      <h6>2022</h6>
    </footer>
  )
}

export default Footer