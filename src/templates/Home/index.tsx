import ContentWrapper from '@/components/ContentWrapper'
import { ReactElement } from 'react'
import LinkBt from '@/components/Buttons/LinkBt'
import { BiLogoLinkedinSquare, BiLogoGithub } from 'react-icons/bi'
import Avatar from '@/components/Avatar'
import { LiaHandPeace } from 'react-icons/lia'

const HomeTemplate = (): ReactElement => {
  return (
    <ContentWrapper>
      <div className="w-full min-h-[calc(100vh-64px)] flex flex-col items-center justify-center gap-y-12">
        <Avatar />
        <div className="flex flex-col justify-center items-center gap-y-3">
          <h4 className="flex items-center font-regular text-5xl">
            Olá, me chamo <span className="ml-1 text-primary"> Alex </span>
            <LiaHandPeace
              size={40}
              className="ml-1 text-primary animate-bounceLow"
            />
          </h4>
          <h5 className="font-thin text-2xl">
            Sou desenvolvedor <span className="text-primary">frontend</span>,
            fascinado por tecnologia e ouvinte assíduo de música.
          </h5>
        </div>

        <div className="bg-primary h-2.5 w-52 rounded-lg" />

        <div className="flex gap-x-6 items-center">
          <LinkBt
            link="https://www.linkedin.com/in/alexsolda/"
            text="Linkedin"
            icon={<BiLogoLinkedinSquare size={25} />}
          />
          <LinkBt
            link="https://github.com/alexsolda"
            text="Github"
            icon={<BiLogoGithub size={25} />}
          />
        </div>
      </div>
    </ContentWrapper>
  )
}

export default HomeTemplate
