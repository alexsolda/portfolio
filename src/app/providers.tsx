'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'react-hot-toast'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <NextUIProvider>
        <Toaster position="top-center" />
        {children}
      </NextUIProvider>
    </ThemeProvider>
  )
}
