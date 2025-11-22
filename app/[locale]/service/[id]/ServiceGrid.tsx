import React from 'react'
import Container from '@/components/shared/formcomponents/Container'

const ServiceGrid = () => {
  return (
   <div className="bg-white py-5 my-5">
      <Container>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-3'>
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className='bg-white p-7 shadow-[0_0_8px_4px_#19437340]'>
            <h2 className='font-extrabold lg:text-[22px] text-lg'>دقة نقل المعلومات الطبية</h2>
            <p className='lg:text-base text-sm mt-3 leading-[35px]'>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
            </p>
          </div>
        ))}
      </div>
    </Container>
   </div>
  )
}

export default ServiceGrid
