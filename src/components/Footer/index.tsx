import { ReactElement } from 'react'
import ContentWrapper from '../ContentWrapper'
import Logo from '../Logo'
import DividerBar from '../DividerBar'

const Footer = (): ReactElement => {
  return (
    <div className="bg-gray dark:bg-black py-12">
      <ContentWrapper>
        <div className="flex flex-col gap-6 items-center justify-center">
          <Logo />
          <DividerBar size="1" />
          <div className="flex flex-col items-center justify-center font-thin dark:text-white text-black">
            <p>desenvolvido por Alex Solda</p>
            <p>2024</p>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default Footer
