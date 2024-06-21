import { ReactElement } from 'react'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { IoWarningOutline } from 'react-icons/io5'

type IToastContainerProps = {
  text: string
  type: ToastContainerTypes
}

export enum ToastContainerTypes {
  success,
  error
}

const ToastContainer = ({ type, text }: IToastContainerProps): ReactElement => {
  const background =
    type === ToastContainerTypes.success ? 'bg-green-300' : 'bg-red-300'

  const border =
    type === ToastContainerTypes.success ? 'border-green-900' : 'border-red-900'

  return (
    <div
      className={`flex gap-1 items-center ${background} border-l-8 ${border} text-black p-3 rounded-lg`}
    >
      {type === ToastContainerTypes.success ? (
        <IoMdCheckmarkCircleOutline size={20} />
      ) : (
        <IoWarningOutline size={20} />
      )}
      <p>{text}</p>
    </div>
  )
}

export default ToastContainer
