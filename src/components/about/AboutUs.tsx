import React from 'react'
import Container from '../shared/formcomponents/Container'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'

const AboutUs = async () => {
  const t = await getTranslations('aboutUs')

  return (
    <div className='py-20 bg-white'>
      <Container>
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-[65px] items-center lg:items-start'>

          <Image
            src='/images/about-us.png'
            alt='about'
            width={321}
            height={269}
            className='w-[260px] sm:w-[300px] lg:w-[321px] h-auto'
          />

          <div className='text-center lg:text-start'>
            <h2 className='font-extrabold lg:text-[22px] text-lg'>
              {t('title')}
            </h2>

            <p className='mt-[17px] text-[#2D2C2C] leading-[30px]'>
              {t('description')}
            </p>

            <button className="bg-[#11459e] rounded-tl-[30px] rounded-br-[30px] h-[55px] lg:w-[355px] font-bold text-white text-base mt-10 px-6 mx-auto lg:mx-0 block">
              {t('button')}
            </button>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default AboutUs
