import React from 'react'
import Main1 from '../Main1'
import Card from '../Card'
import Discount from '../Discount'
import Footer from '../Footer'

const Home = () => {
    const imgurls="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYq0fSwSbgKw01uWaRNhhsNlj1aYz2sa0EA&s"
  return (
    <div className='md:flex md:flex-col md:justify-betweenw-96 md:w-5xl xl:w-12/12  w-96'>
      <Main1 className="" />
<div className='  md:mt-50  md:w-5xl xl:w-12/12 ' >
        <div className=' flex flex-col items-center justify-around  md:flex md:flex-row md:justify-around '>
           <Card imgurl={imgurls} name="CASUAL SHIRTS" rating="960" />
      <Card imgurl="https://m.media-amazon.com/images/I/71bHMvhHKZL._AC_UY1100_.jpg" name="FIT SHIRTS" rating="850" />
       <Card imgurl="https://images.meesho.com/images/products/399124438/yhcoi_512.webp" name="KIDS CASUALS" rating="850" />
        </div>
     
      </div>
      <Discount/>
      <Footer/>
    </div>
  )
}

export default Home
