import React from 'react'


const Discount = () => {
  return (
    <section className='flex flex-col items-center justify-center my-30 gap-20  w-96  py-40 md:w-5xl md:flex md:flex-row md:items-center xl:w-12/12 '>
      <div className='md:w-3xl'>
        <img src="https://jadeblue.com/cdn/shop/articles/mens-formal-wear-checklist-for-2024.jpg?v=1722339867&width=1024" className='px-5  h-auto' />
      </div>
      <div className=" flex flex-col items-center text-base/15 ">
      <div className=' text-base/18 md:p-5'>

    
        <p className='text-lg font-bold text-center md:text-2xl'>20% discount</p>
        <h1 className='text-xl md:text-3xl md:text-center text-center'>Subscribe & Get 20% Discount Code</h1>
        <p className='text-center text-xl'>Looking for discount code for Your surprise?</p>

          </div>
        <div className='flex items-center flex-col gap-15 md:flex-row md:justify-center md:mt-10 md:gap-10 md:px-8'>
    <input type="email" placeholder='Email Address' className='w-86 h-13 mt-7' />
   <button type="button" class="text-white bg-gradient-to-br from-orange-600 to-yellow-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-3 text-center -mt-6  md:mt-8 ">SubScribe</button>
        </div>
        <p className='px-5 text-xl text-center mt-10 md:px-8'>Sign up for our newsletter below to receive the latest discount codes for Yoursurprise</p>
      </div>
    </section>
  )
}

export default Discount
