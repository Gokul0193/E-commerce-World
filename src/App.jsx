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
    <div >
      
        <Navbar/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                 <Route path='/products' element={<ProductsPage/>}/>
            </Routes>
         


    </div>
  )
}

export default App
