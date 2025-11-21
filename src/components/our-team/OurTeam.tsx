import { getTranslations } from 'next-intl/server'
import React from 'react'
import Container from '../shared/formcomponents/Container';
import Image from 'next/image';
const OurTeam = async () => {
    const t = await getTranslations('team');
  return (
    <div className='my-20'>
          <Container>
                 <div className='text-center mx-auto lg:w-[70%]'>
  <h2 className='font-extrabold lg:text-[30px] text-2xl'>
    {t('title')}
  </h2>

  <p className='text-sm lg:text-lg md:text-base leading-[30px] mt-3'>
    {t('subtitle')}
  </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12'>
            <div className='flex flex-col col items-center justify-center gap-5'>
                <Image src = '/images/team-1.png' alt='team' width={304} height={206} />
                <p className='font-bold lg:text-[19px] text-base'>الاعتماد على أحدث التقنيات</p>
            </div>
             <div className='flex flex-col col items-center justify-center gap-5'>
                <Image src = '/images/team-1.png' alt='team' width={304} height={206} />
                <p className='font-bold lg:text-[19px] text-base'>الاعتماد على أحدث التقنيات</p>
            </div>
             <div className='flex flex-col col items-center justify-center gap-5'>
                <Image src = '/images/team-1.png' alt='team' width={304} height={206} />
                <p className='font-bold lg:text-[19px] text-base'>الاعتماد على أحدث التقنيات</p>
            </div>
             <div className='flex flex-col col items-center justify-center gap-5'>
                <Image src = '/images/team-1.png' alt='team' width={304} height={206} />
                <p className='font-bold lg:text-[19px] text-base'>الاعتماد على أحدث التقنيات</p>
            </div>
          </div>
          </Container>
    </div>
  )
}

export default OurTeam