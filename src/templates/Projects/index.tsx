import ContentWrapper from '@/components/ContentWrapper'
import { ProjectCard } from '@/components/ProjectCard'
import SectionTitle from '@/components/SectionTitle'
import { IProjecsDataInfos, projecsData } from '@/utils/projects-data'
import { ReactElement } from 'react'

const ProjectsTemplate = (): ReactElement => {
  return (
    <div>
      <ContentWrapper>
        <div className="py-12">
          <SectionTitle title="Projetos" dividerColor="primary" />
          <div className="flex flex-col pt-12 gap-6">
            {projecsData.map((proj: IProjecsDataInfos, idx) => (
              <ProjectCard key={`${proj.name}-${idx}`} data={proj} />
            ))}
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default ProjectsTemplate
