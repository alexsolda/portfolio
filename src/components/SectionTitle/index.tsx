import { ReactElement } from 'react'
import DividerBar from '../DividerBar'

type ISectionTitleProps = {
  title: string
  dividerColor?: string
}

const SectionTitle = ({
  title,
  dividerColor = 'white'
}: ISectionTitleProps): ReactElement => {
  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-white dark:text-white text-4xl">{title}</p>
      <DividerBar background={dividerColor} />
    </div>
  )
}

export default SectionTitle
