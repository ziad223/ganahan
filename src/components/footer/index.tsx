'use client'

import React from 'react'
import Container from '../shared/formcomponents/Container'
import Image from 'next/image'
import { FaFacebookF, FaSnapchat, FaTiktok, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations('footer')

  return (
    <div className="bg-white pt-10 ">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-[60px] xl:gap-[120px] gap-10">
          
          {/* العمود الأول */}
          <div>
            <div className="flex items-center gap-3">
              <h2 className="font-extrabold lg:text-[20px] xl:text-[22px] text-lg">
                {t('company')}
              </h2>
              <div className="flex items-center gap-1">
                <div className="w-[50px] h-1 bg-[#11459E]"></div>
                <div className="w-[5px] h-1 bg-[#9774B5]"></div>
              </div>
            </div>

            <p className="mt-[18px] text-[13px] leading-[30px] text-[#2D2C2C]">
              {t('description')}
            </p>
          </div>

          {/* العمود الثاني */}
          <div>
            <div>
               <div className="flex items-center gap-3">
              <h2 className="font-extrabold lg:text-[20px] xl:text-[22px] text-lg">
                {t('sections')}
              </h2>
              <div className="flex items-center gap-1">
                <div className="w-[50px] h-1 bg-[#11459E]"></div>
                <div className="w-[5px] h-1 bg-[#9774B5]"></div>
              </div>
            </div>
                   <div className='flex  gap-[105px] w-full mt-[18px] '>
                         <ul className='flex flex-col gap-3'>
                          <li><a href="#" className='font-bold hover:text-[#1F2149] translations duration-300'>{t('quickLinks.home')}</a></li>
                          <li><a href="#" className='font-bold hover:text-[#1F2149] translations duration-300'>{t('quickLinks.about')}</a></li>
                          <li><a href="#" className='font-bold hover:text-[#1F2149] translations duration-300'>{t('quickLinks.services')}</a></li>
                          <li><a href="#" className='font-bold hover:text-[#1F2149] translations duration-300'>{t('quickLinks.blog')}</a></li>
                          <li><a href="#" className='font-bold hover:text-[#1F2149] translations duration-300'>{t('quickLinks.team')}</a></li>
                         </ul>
                           <ul className='flex flex-col gap-3'>
                          <li><a href="#" className='font-bold hover:text-[#1F2149] translations duration-300'>{t('quickLinks.partners')}</a></li>
                          <li><a href="#" className='font-bold hover:text-[#1F2149] translations duration-300'>{t('quickLinks.contactUs')}</a></li>
                         </ul>
                   </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <h2 className="font-extrabold lg:text-[20px] xl:text-[22px] text-lg">
                {t('contact')}
              </h2>
              <div className="flex items-center gap-1">
                <div className="w-[50px] h-1 bg-[#11459E]"></div>
                <div className="w-[5px] h-1 bg-[#9774B5]"></div>
              </div>
            </div>
            <div className='flex flex-col gap-2.5 mt-[18px]'>
              <div className='flex gap-1 items-start'>
                <Image src='/images/footer-location.svg' alt='location' width={20} height={20} />
                <p className='text-[#2D2C2C]'>{t('address')}</p>
              </div>
              <div className='flex gap-1 items-start'>
                <Image src='/images/footer-phone.svg' alt='phone' width={20} height={20} />
                <p className='text-[#2D2C2C]'>{t('phone1')}</p>
              </div>
              <div className='flex gap-1 items-start'>
                <Image src='/images/footer-phone.svg' alt='phone' width={20} height={20} />
                <p className='text-[#2D2C2C]'>{t('phone2')}</p>
              </div>
              <div className='flex gap-1 items-start'>
                <Image src='/images/footer-email.svg' alt='email' width={20} height={20} />
                <p className='text-[#2D2C2C]'>{t('email')}</p>
              </div>
            </div>

            <div className='flex items-center gap-3 mt-3'>
              <div className='flex items-center justify-center border border-[#B85B61] hover:border-[#F0C426] hover:text-[#F0C426] rounded-[5px] w-[37px] h-[33px] transition duration-300 cursor-pointer'>
                <FaFacebookF/>
              </div>
              <div className='flex items-center justify-center border border-[#B85B61] hover:border-[#F0C426] hover:text-[#F0C426] rounded-[5px] w-[37px] h-[33px] transition duration-300 cursor-pointer'>
                <FaXTwitter/>
              </div>
              <div className='flex items-center justify-center border border-[#B85B61] hover:border-[#F0C426] hover:text-[#F0C426] rounded-[5px] w-[37px] h-[33px] transition duration-300 cursor-pointer'>
                <FaYoutube/>
              </div>
              <div className='flex items-center justify-center border border-[#B85B61] hover:border-[#F0C426] hover:text-[#F0C426] rounded-[5px] w-[37px] h-[33px] transition duration-300 cursor-pointer'>
                <FaSnapchat/>
              </div>
              <div className='flex items-center justify-center border border-[#B85B61] hover:border-[#F0C426] hover:text-[#F0C426] rounded-[5px] w-[37px] h-[33px] transition duration-300 cursor-pointer'>
                <FaTiktok/>
              </div>
            </div>
          </div>

        </div>
      </Container>

      <div className='mt-10 bg-[#343694] text-center text-white text-sm font-bold h-[60px] flex items-center justify-center'>
        {t('allRights')}
      </div>
    </div>
  )
}

export default Footer
