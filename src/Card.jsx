import React from 'react'
const Card = (props) => {
  return (
    <div className=  ' py-15  flex-col items-center  '>

        <div className="   w-2xs xl:w-50">
            <img src={props.imgurl} alt=""  className='w-72 h-auto rounded-lg xl:w-50' />
        </div>
        <div className=' mt-7 flex items-center  justify-center flex-col  w-10  gap-5 ml-30 xl:ml-20'>
            <div className='rating  w-40 flex items-center flex-col text-center xl:text-base/7'>
                <h4 className='font-bold w-50 text-2xl'>{props.name}</h4>
              <label className='flex items-center gap-5'> <img src="https://cdn.pixabay.com/photo/2022/01/11/12/16/rating-6930474_640.png" alt="" className='w-25' />({props.rating})</label> 
            </div>
            <button type="button" class="text-white bg-gradient-to-br from-orange-600 to-yellow-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-orange-300 dark:focus:ring-yellow-300 font-medium rounded-lg text-sm px-15 py-2 text-center xl:px-10 xl:py-1">Shop Now</button>
           
        </div>
    </div>

  )
}

export default Card
