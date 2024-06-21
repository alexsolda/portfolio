'use client'
import { ReactElement, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import DefaultBt from '../Buttons/DefaultBt'
import { IoSend } from 'react-icons/io5'
import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast'
import ToastContainer, { ToastContainerTypes } from '../ToastContainer'
import DefaultInput from '../Input'

type IContactFormData = {
  name: string
  email: string
  message: string
}

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

const ContactForm = (): ReactElement => {
  const [isContactLoading, setIsContactLoading] = useState(false)

  const schemaContactForm = Yup.object({
    name: Yup.string().required('Preencha o nome, por favor.'),
    email: Yup.string()
      .email('E-mail inválido')
      .required('Preencha o e-mail, por favor.'),
    message: Yup.string().required('Preencha a mensagem, por favor.')
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IContactFormData>({
    resolver: yupResolver(schemaContactForm)
  })

  const handleFormContact: SubmitHandler<IContactFormData> = (data) => {
    setIsContactLoading(true)

    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.message
    }

    emailjs
      .send(SERVICE_ID!, TEMPLATE_ID!, templateParams, {
        publicKey: PUBLIC_KEY!
      })
      .then(
        () => {
          toast.custom(() => (
            <ToastContainer
              text="Mensagem enviada, obrigado!"
              type={ToastContainerTypes.success}
            />
          ))
          reset()
          setIsContactLoading(false)
        },
        () => {
          toast.custom(() => (
            <ToastContainer
              text="Algo deu errado, tente novamente!"
              type={ToastContainerTypes.error}
            />
          ))
          setIsContactLoading(false)
        }
      )
  }

  return (
    <form
      onSubmit={handleSubmit(handleFormContact)}
      className="flex flex-col gap-6 text-sm"
    >
      <DefaultInput
        name="name"
        label="Nome"
        placeholder="Digite seu nome..."
        error={errors.name?.message ? errors.name?.message : ''}
        register={register}
      />

      <DefaultInput
        name="email"
        label="E-mail"
        error={errors.email?.message ? errors.email?.message : ''}
        placeholder="Digite seu e-mail..."
        register={register}
      />

      <DefaultInput
        name="message"
        label="Mensagem"
        error={errors.message?.message ? errors.message?.message : ''}
        placeholder="Digite sua mensagem..."
        isTextArea
        register={register}
      />
      <div className="flex items-center justify-center">
        <DefaultBt
          text="Enviar"
          icon={<IoSend size={25} />}
          disabled={isContactLoading}
        />
      </div>
    </form>
  )
}

export default ContactForm
