import ContactForm from '@/components/ContactForm'
import ContentWrapper from '@/components/ContentWrapper'
import SectionTitle from '@/components/SectionTitle'
import { ReactElement } from 'react'

const ContactTemplate = (): ReactElement => {
  return (
    <div>
      <ContentWrapper>
        <div className="py-12">
          <SectionTitle title="Contato" dividerColor="primary" />
          <div className="flex flex-col pt-12 gap-6">
            <ContactForm />
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default ContactTemplate
