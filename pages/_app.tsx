// css
import '../styles/globals.css'
import '../styles/fonts.scss'

// components
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return <Component {...pageProps} key={router.route} />
}

export default MyApp
