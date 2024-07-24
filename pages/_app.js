import { Inter } from 'next/font/google'
import '../styles/globals.css'

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

function Website({ Component, pageProps }) {
  return (
    <div 
      className={`antialiased ${fontHeading.variable} ${fontBody.variable}`}
    >
      <Component {...pageProps} />
    </div>
  )
}

export default Website;