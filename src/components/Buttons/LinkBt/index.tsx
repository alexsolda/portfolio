import { ReactElement } from 'react'

type ILinkBtProps = {
  icon: ReactElement
  text: string
}

const LinkBt = ({ icon, text }: ILinkBtProps): ReactElement => {
  return (
    <button className="group active:scale-90 hover:shadow-bShadow ease-in duration-200 min-w-[150px] px-6 py-2 text-primary flex items-center justify-center gap-x-1 border-[1px] border-solid border-primary rounded-lg">
      <div>{icon}</div>
      <p className="font-thin group-hover:font-normal">{text}</p>
    </button>
  )
}

export default LinkBt
