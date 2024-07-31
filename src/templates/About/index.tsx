import ContentWrapper from '@/components/ContentWrapper'
import SectionTitle from '@/components/SectionTitle'
import { ReactElement } from 'react'

const AboutTemplate = (): ReactElement => {
  return (
    <div className="bg-primary py-12">
      <ContentWrapper>
        <div className="flex flex-col text-center items-center justify-center gap-12">
          <SectionTitle title="Sobre" color="whiteish" />
          <div className="flex flex-col gap-6 text-whiteish dark:text-whiteish">
            <p className="text-justify text-lg">
              Estudo sobre desenvolvimento web desde 2019 e possuo 02 anos de
              experiência profissional em desenvolvimento frontend e uma paixão
              por criar interfaces de usuário responsivas e intuitivas. Durante
              minha trajetória profissional, trabalhei com diversas tecnologias
              e frameworks, incluindo <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>
              , <b>TypeScript</b>, <b>ReactJS</b>, <b>Next.js</b>,{' '}
              <b>Tailwind CSS</b> e <b>Figma</b>. Além das habilidades técnicas,
              sou um grande entusiasta de metodologias ágeis e valorizo a
              colaboração em equipe. Em meu papel anterior, participei
              ativamente de sprints, revisões de código e tive a oportunidade de
              reestruturar um sistema ERP com mais de 100 usuários ativos onde
              atuei no auxílio do levantamento de requisitos, trabalhei em
              colaboração para a criação dos protótipos de UI e na estruturação
              inicial e desenvolvimento de novas funcionalidades.
            </p>
            <p className="text-justify text-lg">
              Atualmente continuo me aprimorando nas tecnologias que já utilizo
              e estou me atualizando sobre assuntos como UI/UX e tecnologias de
              backend que também me interessam e que já tive a oportunidade de
              me envolver profissionalmente em alguns projetos.
            </p>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default AboutTemplate
