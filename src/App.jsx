import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Routes,Route
} from "react-router";
import Navbar from './Navbar'
import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/ProductsPage';
const App = () => {
  

  return (
    <div className=' w-96 md:w-5xl xl:w-12/12'>
      
        <Navbar/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                 <Route path='/products' element={<ProductsPage/>}/>
            </Routes>
         


    </div>
  )
}

export default App
