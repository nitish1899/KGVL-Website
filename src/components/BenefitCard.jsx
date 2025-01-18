import React from 'react'

export const BenefitCard = ({passed}) => {
  return (
    <div className=' p-6 pt-4 bg-opacity-75 flex flex-col  hover:text-black  h-auto w-auto    hover:scale-110 transition-all duration-500 box-content bg-gradient-to-b from-white to-yellow-100 border-4 border-yellow-200 rounded-xl shadow-lg'
    style={{ boxShadow: '0 10px 20px rgba(0, 0, 0, 0.9)' }}>
        <div className='font-extrabold text-2xl pb-2 text-yellow-300'
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>{passed.heading } </div>
        <div className='text-black'>{passed.paragraph}</div>
    </div>
  )
}
