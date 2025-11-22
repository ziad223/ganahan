import React from 'react'
import Image from 'next/image'
import Container from '@/components/shared/formcomponents/Container'
import { getTranslations } from 'next-intl/server'
import { Link } from '../../../../navigation'
import { FaWhatsapp } from 'react-icons/fa'

const ServiceHeader = async () => {
    const t = await getTranslations('services');
  return (
    <div className='bg-white py-5'>
        <Container>
    <div className='flex flex-col  lg:flex-row items-center justify-between w-full gap-10  my-5'>
         <div className='lg:w-1/2 w-full'>
             <Image src = '/images/about-page.png' alt='about' width={622} height={366} />
          </div>
          <div className='lg:w-1/2 w-full'>
             <h2 className='font-extrabold lg:text-[22px] text-lg'>الترجمة الطبية !</h2>
             <p className='mt-3 text-base leading-[35px]'>
               الترجمة الطبية هي عملية متخصصة بالغة الدقة تهدف إلى نقل المحتوى الطبي والعلمي والصحي بجميع أنواعه بين اللغات بطريقة دقيقة وخالية من الأخطاء، وتشمل ترجمة السجلات والتقارير الطبية والبحوث والدراسات الإكلينيكية والتعليمات الدوائية والإرشادات العلاجية والنشرات التوعوية ودلائل تشغيل الأجهزة والمعدات الطبية، وتتطلب إلماماً واسعاً بالمصطلحات الطبية وفهماً لتشريح الجسم البشري وآليات الأمراض وطرق العلاج والتشخيص لضمان تجنب أي لبس أو خطأ قد يؤثر على صحة المريض أو سلامة الإجراءات العلاجية، كما تُسهم في تعزيز التواصل بين الأطباء والمرضى في البيئات متعددة اللغات، وتدعم تقدم البحث العلمي وتطوير الأدوية والتقنيات الصحية عالمياً، وتُعد ركيزة أساسية في توحيد المعايير الطبية ونقل المعرفة بين المؤسسات والجامعات والمراكز الصحية، مما يجعلها مجالاً حساساً يستلزم مترجماً محترفاً يجمع بين الخبرة اللغوية العميقة والخلفية الطبية الموثوقة لضمان تقديم محتوى دقيق وآمن وموثوق على أعلى مستوى.
             </p>
             <Link href = '/contact-us' className='w-max mt-6 flex items-center justify-center gap-2 px-7 text-white bg-[#9e9211] rounded-[50px] h-[52px]'>
             {t('requestService')}
             <FaWhatsapp size={20}/>
             </Link>
          </div>
           
    </div>
    </Container>
    </div>
  )
}

export default ServiceHeader