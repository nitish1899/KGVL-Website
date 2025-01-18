import React from 'react'
import { Link } from 'react-router-dom'

export const Button2 = () => {
  return (
    <div className=''>
        <Link to={"/contactUs"}>
             <div className='  md:text-[60%] sm:text-[60%] py-3 px-5 rounded-md bg-yellow-400 font-inter min-[320px]:font-semibold min-[320px]:p-2 min-[320px]:text-[70%]  sm:py-3 sm:px-5 '>Contact Us</div>
        </Link>
    </div>
  )
}
