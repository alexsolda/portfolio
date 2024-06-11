'use client'
import ContentWrapper from '@/components/ContentWrapper'
import { ReactElement, useState } from 'react'
import LinkBt from '@/components/Buttons/LinkBt'
import {
  BiLogoLinkedinSquare,
  BiLogoGithub,
  BiLogoSpotify
} from 'react-icons/bi'
import Avatar from '@/components/Avatar'
import { LiaHandPeace } from 'react-icons/lia'
import DividerBar from '@/components/DividerBar'
import DefaultBt from '@/components/Buttons/DefaultBt'
import ModalContainer from '@/components/ModalContainer'
import { Spinner, useDisclosure } from '@nextui-org/react'

const HomeTemplate = (): ReactElement => {
  const { isOpen, onOpenChange, onOpen } = useDisclosure()
  const [isIframeLoaded, setIsIframeLoaded] = useState(false)

  return (
    <>
      <ContentWrapper>
        <div className="w-full min-h-[calc(100vh-64px)] flex flex-col items-center justify-center gap-y-12">
          <Avatar />
          <div className="flex flex-col justify-center items-center gap-y-3">
            <h4 className="flex flex-wrap justify-center items-center font-regular lg:text-5xl text-3xl">
              Olá, me chamo <span className="ml-1 text-primary"> Alex </span>
              <LiaHandPeace
                size={40}
                className="ml-1 text-primary animate-bounceLow"
              />
            </h4>
            <h5 className="font-thin lg:text-2xl text-xl text-center">
              Sou desenvolvedor <span className="text-primary">frontend</span>,
              fascinado por tecnologia e ouvinte assíduo de música.
            </h5>
          </div>

          <DividerBar />

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
            <DefaultBt
              text="Spotify"
              icon={<BiLogoSpotify size={25} />}
              fn={onOpen}
            />
          </div>
        </div>
      </ContentWrapper>
      <ModalContainer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        title="Uma playlist que eu gosto de ouvir!"
      >
        <>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/13FqHVBYfW5W6SByy8jfhG?utm_source=generator"
            width="100%"
            height={isIframeLoaded ? '500' : '0'}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            onLoad={() => setIsIframeLoaded(true)}
          ></iframe>
          {!isIframeLoaded && (
            <div className="h-[500px] flex items-center justify-center">
              <Spinner size="sm" />
            </div>
          )}
        </>
      </ModalContainer>
    </>
  )
}

export default HomeTemplate
