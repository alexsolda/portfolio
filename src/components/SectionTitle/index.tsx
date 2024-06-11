import { ReactElement } from 'react'
import DividerBar from '../DividerBar'

type ISectionTitleProps = {
  title: string
  dividerColor?: string
  color?: string
}

const SectionTitle = ({
  title,
  dividerColor = 'whiteish',
  color = 'primary'
}: ISectionTitleProps): ReactElement => {
  return (
    <div className="flex flex-col items-center gap-6">
      <p className={`text-${color} dark:text-white text-4xl`}>{title}</p>
      <DividerBar background={dividerColor} />
    </div>
  )
}

export default SectionTitle
