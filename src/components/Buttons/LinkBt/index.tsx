import { ReactElement } from 'react'

type ILinkBtProps = {
  icon: ReactElement
  text: string
  link: string
}

const LinkBt = ({ icon, text, link }: ILinkBtProps): ReactElement => {
  return (
    <a
      href={link}
      target="_blank"
      className="cursor-pointer group active:scale-90 hover:shadow-bShadow ease-in duration-100 min-w-[150px] px-6 py-2 text-primary flex items-center justify-center gap-x-1 border-[1px] border-solid border-primary rounded-lg"
      rel="noreferrer"
    >
      <div>{icon}</div>
      <p className="font-normal">{text}</p>
    </a>
  )
}

export default LinkBt
