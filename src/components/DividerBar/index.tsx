import { ReactElement } from 'react'

type IDividerBarProps = {
  background?: string
  size?: '1' | '2.5'
}

const DividerBar = ({
  background = 'primary',
  size = '2.5'
}: IDividerBarProps): ReactElement => {
  return <div className={`bg-${background} h-${size} w-52 rounded-lg`} />
}

export default DividerBar
