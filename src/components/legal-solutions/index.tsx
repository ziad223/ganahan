import React from 'react'
import SectionTitle from '../shared/reusableComponents/SectionTitle'

type LegalProps = {
  legal: {
    legal_solutions_title: string
    legal_solutions_description: string
  }
  managers: {
    id: number
    name: string
    description: string
  }[]
}

const LegalSolutions = ({ legal, managers }: LegalProps) => {
  return (
    <div className='bg-[#efe9e0] lg:py-14 py-10 ' >
      <div className='flex flex-col gap-5 lg:w-[80%] mx-auto text-center px-4'   data-aos="fade-right">
        <SectionTitle title={legal.legal_solutions_title} />

        <p className='text-[#505050] lg:leading-[39px] leading-[28px] lg:text-base text-sm font-normal'>
          {legal.legal_solutions_description}
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-5 mt-3">
          {managers.map((manager) => (
            <button
              key={manager.id}
              className="w-full lg:w-[505px] h-[94px] rounded-[10px] bg-[#D9A45A] text-white lg:text-lg text-base font-semibold flex flex-col items-center justify-center gap-1"
            >
              <span className="font-semibold">{manager.name}</span>
              <span className="font-medium">{manager.description}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LegalSolutions
