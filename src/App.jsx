import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Routes,Route
} from "react-router";
import Navbar from './Navbar'
import Home from './Pages/Home';
import Products from './Pages/Products';
const App = () => {
  

  return (
    <div >
      
        <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                 <Route path='/products' element={<Products/>}/>
            </Routes>
         


    </div>
  )
}

export default App
