import { ReactElement } from 'react'

type IDividerBarProps = {
  background?: string
}

const DividerBar = ({
  background = 'primary'
}: IDividerBarProps): ReactElement => {
  return <div className={`bg-${background} h-2.5 w-52 rounded-lg`} />
}

export default DividerBar
