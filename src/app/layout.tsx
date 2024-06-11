import type { Metadata } from 'next'
import './globals.css'
import { Kanit, Dancing_Script } from 'next/font/google'
import { Providers } from './providers'

const kanit = Kanit({
  subsets: ['latin'],
  variable: '--font-kanit',
  weight: ['100', '400', '700']
})

const dancing = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  weight: ['400']
})

export const metadata: Metadata = {
  title: 'Alex - Desenvolvedor frontend',
  description:
    'Site profissional com informações e detalhamento de experiências.',
  icons: {
    icon: '/images/favicon.ico'
  }
}

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${kanit.variable} ${dancing.variable} font-kanit bg-whiteish transition dark:text-whiteish text-black min-h-screen dark:bg-gradient-to-tl dark:from-gradientFrom dark:to-black`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout
