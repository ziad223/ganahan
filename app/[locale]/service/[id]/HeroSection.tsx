'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
const HeroSection =  () => {
  const t =  useTranslations('service')
  const locale = useLocale()
  return (
    <div className="relative w-full h-[233px]">
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
        <Link href={`/${locale}`} className='flex items-center justify-center gap-2'>
          <Image src='/images/home.svg' alt='home' width={24} height={24} />
          <span className='font-extrabold text-[#82D60C] lg:text-xl text-lgLink'>
            {t('home')}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default HeroSection
