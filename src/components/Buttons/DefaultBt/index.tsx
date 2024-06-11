'use client'

import { Spinner } from '@nextui-org/react'
import { ReactElement, useEffect, useState } from 'react'

type ILinkBtProps = {
  icon: ReactElement
  text: string
  fn?: () => void
}

const DefaultBt = ({ icon, text, fn }: ILinkBtProps): ReactElement => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => setIsMounted(true), [])

  if (!isMounted) {
    return <Spinner size="sm" />
  }

  return (
    <button
      onClick={fn}
      className="cursor-pointer group active:scale-90 hover:shadow-bShadow ease-in duration-100 min-w-[150px] px-6 py-2 text-primary flex items-center justify-center gap-x-1 border-[1px] border-solid border-primary rounded-lg"
    >
      <div>{icon}</div>
      <p className="font-normal">{text}</p>
    </button>
  )
}

export default DefaultBt
