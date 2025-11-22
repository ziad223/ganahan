import React from 'react'
import { Link } from '../../../navigation'
import Image from 'next/image'
import Container from '@/components/shared/formcomponents/Container'
import { getTranslations } from 'next-intl/server'

const AboutCompany = async () => {
    const t = await getTranslations('aboutCompany');
  return (
    <div className='bg-white py-5'>
        <Container>
    <div className='flex flex-col  lg:flex-row items-center justify-between w-full gap-10 lg:gap-20 my-5'>
          <div className='lg:w-1/2 w-full'>
             <h2 className='font-extrabold lg:text-[22px] text-lg'>{t('title')}</h2>
             <p className='mt-3 text-base leading-[35px]'>
                {t('description')}
             </p>
             <Link href = '/contact-us' className='w-[158px] mt-6 flex items-center justify-center text-white bg-[#11459E] rounded-[50px] h-[52px]'>
             {t('contact')}
             </Link>
          </div>
            <div className='lg:w-1/2 w-full'>
             <Image src = '/images/about-page.png' alt='about' width={622} height={366} />
          </div>
    </div>
    </Container>
    </div>
  )
}

export default AboutCompany