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
            <p>
              Estou me especializando desde 2019 ao desenvolvimento web, mais
              especificamente a tecnologias voltadas ao frontend. Nesse período
              adquiri mais de 2 anos de experiência profissional trabalhando com
              tecnologias como: HTML, CSS, JavaScript, React.js e Next.js.
            </p>
            <p>
              Ultimamente estou me atualizando sobre assuntos como UI/UX e
              tecnologias de backend que também me interessam e que já tive a
              oportunidade de me envolver profissionalmente em alguns projetos.
            </p>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default AboutTemplate
