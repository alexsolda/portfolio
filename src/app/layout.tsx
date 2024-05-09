import type { Metadata } from 'next'
import './globals.css'
import { Kanit } from 'next/font/google'
import { Providers } from './providers'

const kanit = Kanit({
  subsets: ['latin'],
  variable: '--font-kanit',
  weight: ['100', '400', '700']
})

export const metadata: Metadata = {
  title: 'Alex - Desenvolvedor frontend',
  description:
    'Site profissional com informações e detalhamento de experiências.'
}

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en">
      <body
        className={`${kanit.className} min-h-screen bg-gradient-to-tl from-black to-gradientFrom`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout
