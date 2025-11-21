import React from 'react'
import Container from '../shared/formcomponents/Container'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
const services = [
  {
    id: 1,
    img: '/images/patient-1.svg',
    title: 'الترجمة الطبية',
    text: `دقة متناهية للرعاية الصحية العالية:
نقدم ترجمة احترافية للوثائق الطبية بما في ذلك التقارير الطبية، الوصفات، والسجلات، مع ضمان أعلى درجات الدقة لضمان التواصل السليم في المجال الطبي.`
  },
  {
    id: 2,
    img: '/images/patient-1.svg',
    title: 'الترجمة الطبية',
    text: `دقة متناهية للرعاية الصحية العالية:
نقدم ترجمة احترافية للوثائق الطبية بما في ذلك التقارير الطبية، الوصفات، والسجلات، مع ضمان أعلى درجات الدقة لضمان التواصل السليم في المجال الطبي.`
  },
  {
    id: 3,
    img: '/images/patient-1.svg',
    title: 'الترجمة الطبية',
    text: `دقة متناهية للرعاية الصحية العالية:
نقدم ترجمة احترافية للوثائق الطبية بما في ذلك التقارير الطبية، الوصفات، والسجلات، مع ضمان أعلى درجات الدقة لضمان التواصل السليم في المجال الطبي.`
  },
  {
    id: 4,
    img: '/images/patient-1.svg',
    title: 'الترجمة الطبية',
    text: `دقة متناهية للرعاية الصحية العالية:
نقدم ترجمة احترافية للوثائق الطبية بما في ذلك التقارير الطبية، الوصفات، والسجلات، مع ضمان أعلى درجات الدقة لضمان التواصل السليم في المجال الطبي.`
  },
  {
    id: 5,
    img: '/images/patient-1.svg',
    title: 'الترجمة الطبية',
    text: `دقة متناهية للرعاية الصحية العالية:
نقدم ترجمة احترافية للوثائق الطبية بما في ذلك التقارير الطبية، الوصفات، والسجلات، مع ضمان أعلى درجات الدقة لضمان التواصل السليم في المجال الطبي.`
  },
  {
    id: 6,
    img: '/images/patient-1.svg',
    title: 'الترجمة الطبية',
    text: `دقة متناهية للرعاية الصحية العالية:
نقدم ترجمة احترافية للوثائق الطبية بما في ذلك التقارير الطبية، الوصفات، والسجلات، مع ضمان أعلى درجات الدقة لضمان التواصل السليم في المجال الطبي.`
  },
  {
    id: 7,
    img: '/images/patient-1.svg',
    title: 'الترجمة الطبية',
    text: `دقة متناهية للرعاية الصحية العالية:
نقدم ترجمة احترافية للوثائق الطبية بما في ذلك التقارير الطبية، الوصفات، والسجلات، مع ضمان أعلى درجات الدقة لضمان التواصل السليم في المجال الطبي.`
  },
  {
    id: 8,
    img: '/images/patient-1.svg',
    title: 'الترجمة الطبية',
    text: `دقة متناهية للرعاية الصحية العالية:
نقدم ترجمة احترافية للوثائق الطبية بما في ذلك التقارير الطبية، الوصفات، والسجلات، مع ضمان أعلى درجات الدقة لضمان التواصل السليم في المجال الطبي.`
  }
]

const OurServices = async () => {
  const t = await getTranslations('services')
  return (
    <div className='bg-[#e3e7e6] lg:h-[990px] py-10'>
      <Container>
       <div className='text-center mx-auto lg:w-[70%]'>
  <h2 className='font-extrabold lg:text-[30px] text-2xl'>
    {t('title')}
  </h2>

  <p className='text-sm lg:text-lg md:text-base leading-[30px] mt-3'>
    {t('subtitle')}
  </p>
</div>


        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
          
          {services.map((service) => (
            <div
              key={service.id}
              className='bg-[#343694] py-5 lg:py-0 px-5 text-white flex flex-col justify-center items-center gap-3 lg:h-[376px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[30px]'
            >
              <Image src={service.img} alt={service.title} width={80} height={80} />

              <h2 className='lg:text-[25px] text-[20px] font-extrabold'>
                {service.title}
              </h2>

              <div className="mt-2 font-bold text-[15px] leading-[25px]">
                {service.text}
              </div>
            </div>
          ))}

        </div>
      </Container>
    </div>
  )
}

export default OurServices
