import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaLinkedin, FaTiktok } from 'react-icons/fa'
import {  FaXTwitter } from 'react-icons/fa6'
import { FaSnapchat } from "react-icons/fa6";
import ContactUsInput from './ContactUsInput';

const ContactForm = () => {
  return (
    <div className='flex items-center flex-col lg:flex-row justify-between w-full mb-10'>
      <div className='lg:w-[60%] w-full'>
         <ContactUsInput/>
      </div>
       <div className='lg:w-[40%] w-full bg-[#343694] mt-10 p-5 lg:mt-[-20px]'>
           <div className='text-white'>
            <h2 className='font-bold lg:text-lg text-base mb-[22px]'>ساعات العمل</h2>
            <h3 className=' lg:text-lg text-base'>السبت :      PM 05:30  - AM 10:05</h3>
            <h3 className=' lg:text-lg text-base'>الاحد :           PM 05:30  - AM 10:05</h3>
            <h3 className=' lg:text-lg text-base'>الاثنين :        PM 05:30  - AM 11:05</h3>
           </div>
           <div className='w-full h-[1px] bg-[#F9F2F2] my-3'></div>
                       <h2 className='font-bold lg:text-lg  text-white text-base mb-[22px]'>طرق التواصل</h2>
                       <div className='flex flex-col gap-3 mt-4'>
                          <div className='flex items-center gap-1'>
                            <Image src = '/images/contact-phone.svg' alt='contact' width={20} height={20} />
                            <span className='text-white text-lg'>+966 - 558556499</span>
                          </div>
                          <div className='flex items-center gap-1'>
                            <Image src = '/images/contact-mobile.svg' alt='contact' width={20} height={20} />
                            <span className='text-white text-lg'>+966 - 558556499</span>
                          </div>
                           <div className='flex items-center gap-1'>
                            <Image src = '/images/contact-email.svg' alt='contact' width={20} height={20} />
                            <span className='text-white text-lg'>info@janahan.sa</span>
                          </div>
                           <div className='flex items-center gap-1'>
                            <Image src = '/images/contact-email.svg' alt='contact' width={20} height={20} />
                            <span className='text-white text-lg'>info@janahan.sa</span>
                          </div>
                          <div className='flex items-center gap-1'>
                            <Image src = '/images/contact-location.svg' alt='contact' width={20} height={20} />
                            <span className='text-white text-lg'>
                                3782 شارع تبوك، الازدهار، 6540, الرياض 12485
                            </span>
                          </div>
                       </div>
                       <div className="flex items-center gap-3 mt-6 justify-center">
                           <div className='w-[50px] h-[45px] rounded-[5px] border border-gray-100 flex items-center justify-center'>
                               <FaFacebookF size={18} className='text-white'/>
                           </div>
                            <div className='w-[50px] h-[45px] rounded-[5px] border border-gray-100 flex items-center justify-center'>
                               <FaXTwitter size={18} className='text-white'/>
                           </div>
                            <div className='w-[50px] h-[45px] rounded-[5px] border border-gray-100 flex items-center justify-center'>
                               <FaLinkedin size={18} className='text-white'/>
                           </div>
                            <div className='w-[50px] h-[45px] rounded-[5px] border border-gray-100 flex items-center justify-center'>
                               <FaSnapchat size={18} className='text-white'/>
                           </div>
                            <div className='w-[50px] h-[45px] rounded-[5px] border border-gray-100 flex items-center justify-center'>
                               <FaTiktok size={18} className='text-white'/>
                           </div>
                       </div>
      </div>
    </div>
  )
}

export default ContactForm