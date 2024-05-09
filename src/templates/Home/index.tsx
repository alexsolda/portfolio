import ContentWrapper from '@/components/ContentWrapper'
import Image from 'next/image'
import { ReactElement } from 'react'
import profileImage from '/public/images/profile-avatar.png'
import LinkBt from '@/components/Buttons/LinkBt'
import { BiLogoLinkedinSquare, BiLogoGithub } from 'react-icons/bi'

const HomeTemplate = (): ReactElement => {
  return (
    <ContentWrapper>
      <div className="w-full mt-6 h-full flex flex-col items-center justify-center gap-y-12">
        <Image
          src={profileImage}
          alt="Foto de perfil do desenvolvedor."
          priority
        />
        <div className="flex flex-col justify-center items-center gap-y-3">
          <h4 className="font-regular text-5xl">
            Olá, me chamo <span className="text-primary">Alex </span>
            ✌️
          </h4>
          <h5 className="font-thin text-2xl">
            Sou desenvolvedor <span className="text-primary">frontend </span>,
            fascinado por tecnologia e ouvinte assíduo de música.
          </h5>
        </div>

        <div className="bg-primary h-2.5 w-52 rounded-lg" />

        <div className="flex gap-x-6 items-center">
          <LinkBt text="Linkedin" icon={<BiLogoLinkedinSquare size={25} />} />
          <LinkBt text="Github" icon={<BiLogoGithub size={25} />} />
        </div>
      </div>
    </ContentWrapper>
  )
}

export default HomeTemplate
