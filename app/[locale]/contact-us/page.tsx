import React from 'react'
import ContactHero from './ContactHero'
import ContactForm from './ContactForm'
import Container from '@/components/shared/formcomponents/Container'

const Page = () => {
  return (
    <div>
      <ContactHero />
   <div
  className="w-full h-[150px] md:h-[307px] bg-cover bg-center flex items-center justify-center px-5"
  style={{ backgroundImage: "url('/images/contact-bg.png')" }}
>
        <div className="text-center text-black">
          <h2 className="text-3xl lg:text-[22px] font-extrabold mb-3 ">اتصل بنا</h2>
          <p className="text-lg lg:text-xl text-[#4E514D]">يمكنكم التواصل معنا من خلال النموذج التالي</p>
        </div>
      </div>
      <Container>
         <ContactForm/>
      </Container>
    </div>
  )
}

export default Page
