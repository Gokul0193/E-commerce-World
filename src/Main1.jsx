import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { Link } from 'react-router'
const Main1 = () => {
  return (
    <main className=' sm:flex sm:items-center sm:justify-center sm:flex-row   sm:w-full sm:py-20 w-96 h- flex flex-col pb-80 gap-90  sm:gap-15 md:w-5xl xl:w-12/12 xl:gap-28 md:mt-15 '>
        <div className=" leading-18   sm:w-100 h-10 text-center pt-15 px-2 md:pb-60 ">
            <h4 className="text-2xl sm:text-5">Starting at only $0.5</h4>
            <h1 class="font-bold font-mono text-2xl"><span class="text-orange-600  text-3xl " >SUMMER </span>SPECIAL COLLECTION</h1>
            <p className='text-2xl'>Brand day flat <span className='text-orange-600 font-bold'>20%</span>  off and free shipping</p>

            <div className=' flex items-center gap-7 mt-10 sm:gap-10 sm:pl-5 '>
                <button type="button" class="text-white bg-gradient-to-br from-orange-600 to-yellow-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-orange-400 font-medium rounded-lg text-sm px-10 py-4 text-center me-2  cursor-pointer  sm:px-5 sm:py-3 xl:px-9 xl:py-2"><Link to='/products'>Shop Now</Link></button>
           
              <label className='flex items-center justify-between xl:w-50  '> <FaPhone className='w-6 h-6 mr-4'/> +(00)-000-000-0000</label> 

            </div>
        </div>
        <div className=" w-96 h-auto sm:w-50 md:w-70 lg:w-90 xl:w-xl">
            <img src="https://img.freepik.com/premium-photo/handsome-man-with-shopping-bags-white-background_246836-3379.jpg" alt="man" />
        </div>
    </main>
  )
}

export default Main1
