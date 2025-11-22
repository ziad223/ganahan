import { useTranslations } from 'next-intl'
import React from 'react'

const ContactUsInput = () => {
    const t = useTranslations('ContactUs')
  return (
    <form className='lg:p-10 p-0'>
       <h2 className='font-extrabold text-xl lg:text-[22px] hidden lg:block'>{t('title')}</h2>
       <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-7'>
        <input type='text' placeholder='الاسم' className='bg-white  outline-none h-[50px] px-5'/>
        <input type='text' placeholder='البريد الإلكتروني' className='bg-white  outline-none h-[50px] px-5'/>
        <input type='text' placeholder='رقم الجوال' className='bg-white  outline-none h-[50px] px-5'/>
        <input type='text' placeholder='عنوان الرسالة' className='bg-white  outline-none h-[50px] px-5'/>
       </div>
       <textarea placeholder='اكتب الرسالة.' className='bg-white mt-5 py-5  outline-none h-[261px] px-5 block w-full'>
       </textarea>
       <button className='px-5 h-[50px] bg-[#9E9211] mt-5 flex justify-end items-center float-end text-white'>إرسال الرسالة</button>
    </form>
  )
}

export default ContactUsInput