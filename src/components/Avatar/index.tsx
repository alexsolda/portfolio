import Image from 'next/image'
import { ReactElement } from 'react'
import avatarImage from '/public/images/profile-avatar.png'

const Avatar = (): ReactElement => {
  return (
    <div className="relative h-[200px] w-[200px] rounded-lg flex items-center justify-center border-[1px] border-solid border-primary animate-border">
      <Image
        src={avatarImage}
        alt="Foto de perfil do desenvolvedor."
        priority
        width={200}
        height={200}
        className="absolute top-[-20px] left-[-24px]"
      />
    </div>
  )
}

export default Avatar
