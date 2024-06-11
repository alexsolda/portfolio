'use client'
import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react'
import { ReactElement } from 'react'

type IModalContainerProps = {
  isOpen: boolean
  onOpenChange: () => void
  title?: string
  children: ReactElement
}

const ModalContainer = ({
  isOpen,
  onOpenChange,
  title,
  children
}: IModalContainerProps): ReactElement => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
      <ModalContent>
        {title && (
          <ModalHeader className="flex flex-col gap-1 mx-8 mt-6 dark:text-whiteish text-black">
            {title}
          </ModalHeader>
        )}
        <ModalBody className="p-8">{children}</ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ModalContainer
