import React from 'react'
import emart from "./assets/emart.png"
import fb from "./assets/facebook.png"
import li from "./assets/linkedin.png"
import yo from "./assets/youtube.png"
import { IoIosContact } from "react-icons/io";

const Footer = () => {
  return (
    <footer className='flex justify-center flex-col mt-80px  w-96  md:w-5xl xl:w-12/12 '>
        <div className=' flex items-center justify-around mx-50px  md:-gap-20 xl:justify-around  '>
            <div className=' px-5 flex flex-col gap-20 md:flex md:flex-row md:items-center xl:gap-55'>
        <div className=' h-250px text-center text-base/5 mb-10'>
            <img src={emart} className='w-25 ml-6  mt-10 ' />
            <ul className='flex flex-col text-base/10 mb-5'>
                <li>loreum sit amy</li>
                <li>Privacy Policy</li>
                <li>Terms and Condition</li>
            </ul>
        </div>
        <div className='sub-details h-250px text-center text-base/5'>
           
           <h4 className='text-lg font-bold mb-40px'>INFORMATION</h4>
            <ul className='flex flex-col text-base/10 mb-5'>
                <li>Old city street,Usa</li>
                <li>About us</li>
                <li>Check out</li>
                <li>Return and refund</li>
            </ul>
        </div>
        </div>

        <div className='px-5 py-10 flex flex-col gap-14 md:flex-row md:items-center xl:gap-50'>

        
        <div className='h-250px text-center text-base/5 mb-10'>
           
           <h4 className='text-lg text-center font-bold mb-40px  ml-6  mt-10'>HELP</h4>
            <ul className='flex flex-col text-base/10 mb-5'>
                <li>My Account</li>
                <li>Free Home Delivery</li>
                <li>Cart</li>
                <li>Order Status</li>
            </ul>
        </div>
        <div className='sub-details h-250px text-center text-base/5  '>
           
           <h4 className='text-lg font-bold mb-40px mb-6'>SOCIAL MEDIA</h4>
            <ul className='flex flex-col text-base/10 mb-5 gap-3 items-center'>
                <li className=' flex items-center gap-5'>
                    <img src={fb} className=' w-7'  />
                    <img src={yo} className='w-7' />
                    <img src={li} className='w-7' />
                </li>
                <li className='contact flex items-center text-sm gap-2'><IoIosContact className='h-6 w-6 ' />+(00)-000-000-0000</li>
                <li>info@gmail.com</li>
            
            </ul>
        </div>

        </div>

        </div>

        <hr className='mx-10 md:mx-20 '/>
        <div className=' flex flex-col gap-10 items-center my-10 md:flex-row md:justify-around '>
            <div className=' flex items-center gap-5 '>
                <h3 className='font-bold text-lg'>Category</h3>
            <p>Tanks  T-Shirt   Polo   Shirts  Men Belts</p>
            </div>
            <div>
                <p>© EMART 2025 | All Rights Reserved </p>
            </div>
            
        </div>

    </footer>
  )
}

export default Footer
