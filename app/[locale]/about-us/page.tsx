import Image from 'next/image'
import React from 'react'
import { Link } from '../../../navigation'
import AboutCompany from './AboutCompany'
import Container from '@/components/shared/formcomponents/Container'
import Partners from '@/components/partners/Partners'
import Testimonails from '@/components/testimonails'
import { getTranslations } from 'next-intl/server'

const Page = async () => {
  const t = await getTranslations('aboutPage')
  return (
    <div className='min-h-screen'>
      <div className="relative w-full h-[233px]  ">
        
        <Image 
          src="/images/team-1.png" 
          alt="team"
          className="w-full h-full object-cover"
          width={1400}
          height={233}
        />

        <div className="absolute inset-0 bg-[#1F2149] bg-opacity-60"></div>

        <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center">
           <h2 className="text-white lg:text-[40px] text-3xl font-extrabold">
            {t('title')}
          </h2>
          <Link href='/' className='flex items-center justify-center gap-2'>
           <Image src = '/images/home.svg' alt='home' width={24} height={24} />
          <span className='font-extrabold text-[#82D60C] lg:text-xl text-lgLink'>
              {t('home')}
            </span>
          </Link>
        </div>

      </div>
        <AboutCompany/>
       <div className="bg-white py-5 my-3">
        <Container>
         <div className='mt-[54px] grid rid-cols-1 lg:grid-cols-2 gap-5 my-20'>
<div className="relative z-20 lg:h-[366px] bg-white p-10 shadow-[0_0_8px_4px_#19437340]">
               <div className='flex gap-6'>
                  <Image src = '/images/vision.svg' alt='vision' width={59} height={63} />
                  <span className='font-extrabold lg:text-[22px] text-lg'>{t('vision')}</span>
               </div>
               <p className='mt-6 text-base leading-[35px]'>
هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
               </p>
          </div>
          <div className="relative z-20 lg:h-[366px] bg-[#DFE8F6] p-10 shadow-[0_0_8px_4px_#19437340]">
               <div className='flex gap-6'>
                  <Image src = '/images/message.svg' alt='message' width={59} height={63} />
                  <span className='font-extrabold lg:text-[22px] text-lg'>{t('message')}</span>
               </div>
               <p className='mt-6 text-base leading-[35px]'>
هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
               </p>
          </div>
        </div>
       </Container>
       </div>
        <Partners/>
        <Testimonails/>
    </div>
  )
}

export default Page
