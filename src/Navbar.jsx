import React, { useState } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const[isActive,setActive]=useState("Products");
  const buttonsTo=[
    {
      feature:"Home",
      To:'/'
    },
     {
      feature:"Products",
      To:'/products'
    },
     {
      feature:"Services",
      To:'/'
    },
      {
      feature:"Pricing",
      To:'/'
    },
      {
      feature:"Contact",
      To:'/'
    },

  ]

   function Click(keyFeature){
     setActive(keyFeature)
   }

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 w-96 md:w-5xl xl:w-12/12">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://brandeps.com/logo-download/E/Emart-logo-01.png"
            className="h-10 w-auto"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            World
          </span>
        </a>

 
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 17 14"
            
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Nav menu */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 mt-4 md:mt-0 bg-gray-50 md:bg-white rounded-lg border md:border-0 dark:bg-gray-800 md:dark:bg-gray-900">
            
    {
      buttonsTo.map(
        (btn=>{
          return  <li key={btn.feature} onClick={()=>{
            setActive(btn.feature)
          }
          }>
              <Link
                to={btn.To}
                className={`block py-2 px-3 text-white   rounded md:bg-transparent hover:text-blue-700 dark:text-white ${isActive===btn.feature ? 'bg-blue-700':''}`}  
              >
                {btn.feature}
              </Link>
            </li>
         
        })
      )
    }
      
           
            
            
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
