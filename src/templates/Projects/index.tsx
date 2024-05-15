import ContentWrapper from '@/components/ContentWrapper'
import SectionTitle from '@/components/SectionTitle'
import { ReactElement } from 'react'

const ProjectsTemplate = (): ReactElement => {
  return (
    <div>
      <ContentWrapper>
        <div className="py-12">
          <SectionTitle title="Projetos" dividerColor="primary" />
        </div>
      </ContentWrapper>
    </div>
  )
}

export default ProjectsTemplate
