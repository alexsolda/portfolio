'use client'

import { ReactElement, useEffect, useState } from 'react'
import { MdSunny, MdDarkMode } from 'react-icons/md'
import { useTheme } from 'next-themes'
import { Spinner } from '@nextui-org/react'

const ThemeBt = (): ReactElement => {
  const [isMounted, setIsMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setIsMounted(true), [])

  if (!isMounted) {
    return <Spinner size="sm" />
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="text-primary active:scale-90 hover:scale-125 ease-in duration-200"
    >
      {resolvedTheme === 'dark' ? (
        <MdSunny size={25} />
      ) : (
        <MdDarkMode size={25} />
      )}
    </button>
  )
}

export default ThemeBt
