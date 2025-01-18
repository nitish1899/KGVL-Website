import React from 'react'
import { Book } from './Book'

export const GoodComp = () => {
  return (
<div class="flex  items-center justify-center rounded-lg font-inter ">
     <div class="  w-full rounded-md bg-gradient-to-r  from-[#6beb03] to-[#e0ef0d] p-1 ">
        <div class=" px-5 py-2 flex flex-col h-full w-full bg-white text-black font-inter  ">
         <div className='text-2xl text-center py-10 font-bold '>KGV Hybrid Kit </div>
         <div className='w-full h-1 bg-black   '>
         </div>

         <div className='flex-col gap-10 px-3 py-5 text-xl'>
          <p>Running cost of 0.2<sup>*</sup> Rs/km </p>
          <p>Extended drive range </p>
          <p>Zero Carbon emission </p>
          <p>Reliable electric options</p>
          <p>Run on both electric mode and normal mode</p>
         </div>

         <div className='flex mx-auto gap-11 content-center mt-8 justify-center items-center'>
         <Book></Book>
      </div>
        </div>
    </div>
</div>
  )
}
