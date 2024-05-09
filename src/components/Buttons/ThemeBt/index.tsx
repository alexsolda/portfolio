'use client'

import { ReactElement, useState } from 'react'
import { MdSunny, MdDarkMode } from 'react-icons/md'

const ThemeBt = (): ReactElement => {
  const [isDark, setIsDark] = useState(true)

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="text-primary hover:scale-125 ease-in duration-200"
    >
      {isDark ? <MdSunny size={25} /> : <MdDarkMode size={25} />}
    </button>
  )
}

export default ThemeBt
