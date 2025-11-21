'use client';

import React, { useState } from 'react';
import Container from '../shared/formcomponents/Container';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import { usePathname } from 'next/navigation';
import { CiMenuFries } from 'react-icons/ci';
import clsx from 'clsx';

const Navbar = ({ currentLocale }: { currentLocale: string }) => {
  const t = useTranslations('navbar');
  const [openServices, setOpenServices] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const pathname = usePathname();

  const toggleServices = () => setOpenServices(prev => !prev);
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');
  const isServicesActive = () => pathname.includes('/our-services');

  const navLinks = [
    { label: t('home'), href: `/${currentLocale}` },
    { label: t('about'), href: `/${currentLocale}/about-us` },
    { label: t('services'), href: `/${currentLocale}/our-services`, dropdown: [
      { label: t('service1'), href: `/${currentLocale}/our-services/service-1` },
      { label: t('service2'), href: `/${currentLocale}/our-services/service-2` },
      { label: t('service3'), href: `/${currentLocale}/our-services/service-3` }
    ]},
    { label: t('blog'), href: `/${currentLocale}/blog` },
    { label: t('team'), href: `/${currentLocale}/team` },
    { label: t('partners'), href: `/${currentLocale}/partners` },
    { label: t('contact'), href: `/${currentLocale}/contact-us` },
  ];

  return (
    <div>
      <Container>
        {/* Navbar */}
        <div className='py-2 flex items-center justify-between w-full'>
          
          {/* الشاشات الكبيرة */}
          <div className='hidden md:flex items-center gap-8 w-full'>
             <Image 
              src='/images/logo.svg' 
              alt='logo' 
              width={150} 
              height={83} 
              className='md:w-[183px] md:h-[83px] w-[140px] h-[50px]' 
            />
           
           

            {/* الروابط */}
            <ul className='flex items-center gap-6 ml-auto'>
              {navLinks.map(link => (
                <li key={link.href} className='relative'>
                  {link.dropdown ? (
                    <>
                      <div className='flex items-center gap-1 cursor-pointer' onClick={toggleServices}>
                        <span className={clsx(
                          'text-lg font-bold hover:text-[#343694]',
                          isServicesActive() ? 'text-[#343694]' : 'text-[#1F2149]'
                        )}>
                          {link.label}
                        </span>
                        <Image 
                          src='/images/chev-down.svg' 
                          alt='dropdown' 
                          width={16} 
                          height={16} 
                          className={clsx(
                            'transition-transform duration-200',
                            openServices ? 'rotate-180' : '',
                            isServicesActive() ? 'text-[#343694]' : 'text-[#1F2149]'
                          )}
                        />
                      </div>
                      {openServices && (
                        <ul className='absolute top-full mt-3 bg-white shadow-lg rounded-md p-4 flex flex-col gap-3 min-w-[180px] z-50'>
                          {link.dropdown.map(sublink => (
                            <li key={sublink.href}>
                              <Link 
                                href={sublink.href}
                                className={clsx(
                                  'hover:text-[#343694] font-medium',
                                  isActive(sublink.href) ? 'text-[#343694]' : 'text-[#1F2149]'
                                )}
                                onClick={() => setOpenServices(false)}
                              >
                                {sublink.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link 
                      href={link.href}
                      className={clsx(
                        'text-lg font-bold hover:text-[#343694]',
                        isActive(link.href) ? 'text-[#343694]' : 'text-[#1F2149]'
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
              <div >
              <LanguageSwitcher />
            </div>
          </div>

          {/* الشاشات الصغيرة */}
          <div className='flex md:hidden items-center justify-between w-full'>
             <Image 
              src='/images/logo.svg' 
              alt='logo' 
              width={120} 
              height={50} 
            />
            {/* LanguageSwitcher + menu icon على اليسار */}
            <div className='flex items-center gap-2'>
              <LanguageSwitcher />
              <CiMenuFries size={30} className='cursor-pointer' onClick={() => setOpenSidebar(true)} />
            </div>

           
          </div>
        </div>
      </Container>

      {/* Sidebar للشاشات الصغيرة */}
      {/* Sidebar للشاشات الصغيرة */}
<div
  className={clsx(
    'fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 z-50',
    openSidebar ? 'translate-x-0' : 'translate-x-full'
  )}
>
  <div className='flex justify-between items-center p-4 border-b'>
    <h2 className='font-bold text-lg'>{t('home')}</h2>
    <span
      className='cursor-pointer text-2xl'
      onClick={() => setOpenSidebar(false)}
    >
      ×
    </span>
  </div>

  <ul className='flex flex-col gap-4 p-4'>
    {navLinks.map(link => (
      <li key={link.href} className='relative'>

        {/* لو فيه dropdown */}
        {link.dropdown ? (
          <>
            {/* الزر الرئيسي للخدمات */}
            <div
              className='flex justify-between items-center cursor-pointer'
              onClick={toggleServices}
            >
              <span className='font-bold'>{link.label}</span>

              <Image
                src='/images/chev-down.svg'
                alt='dropdown'
                width={16}
                height={16}
                className={clsx(
                  'transition-transform duration-200',
                  openServices ? 'rotate-180' : ''
                )}
              />
            </div>

            {/* اللينكات بتظهر فقط لو openServices === true */}
            {openServices && (
              <ul className='flex flex-col ml-4 mt-2 gap-2'>
                {link.dropdown.map(sublink => (
                  <li key={sublink.href}>
                    <Link
                      href={sublink.href}
                      onClick={() => setOpenSidebar(false)}
                      className='hover:text-[#343694]'
                    >
                      {sublink.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <Link
            href={link.href}
            onClick={() => setOpenSidebar(false)}
            className='hover:text-[#343694]'
          >
            {link.label}
          </Link>
        )}
      </li>
    ))}
  </ul>
</div>


      {/* Overlay خلفية */}
      {openSidebar && <div className='fixed inset-0 bg-black bg-opacity-30 z-40' onClick={() => setOpenSidebar(false)}></div>}
    </div>
  );
};

export default Navbar;
