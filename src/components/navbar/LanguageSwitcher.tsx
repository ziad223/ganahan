'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import sudia from '@/public/images/sudia.png';
import usa from '@/public/images/usa.svg';

const LanguageSwitcher = () => {
  const pathname = usePathname();

  const isArabic = pathname.startsWith('/ar');
  const newLocale = isArabic ? 'en' : 'ar';

  const toggleLanguage = () => {
    const pathWithoutLocale = pathname.replace(/^\/(ar|en)/, '');
    window.location.href = `/${newLocale}${pathWithoutLocale}`;
  };

  return (
    <div
      onClick={toggleLanguage}
      className=' cursor-pointer text-sm  flex items-center gap-2 justify-center px-4 h-[41px] rounded-[21px]'
    >
      <Image 
        src={isArabic ? usa : sudia} 
        alt={isArabic ? 'السعودية' : 'USA'} 
        width={16} 
        height={16} 
        className=''
      />
      <h4 className='text-sm font-bold'>{isArabic ? 'English' : 'العربية'}</h4>
    </div>
  );
};

export default LanguageSwitcher;
