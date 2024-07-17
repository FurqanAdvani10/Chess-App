import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Hero from '../Pages/hero/hero'
import Details from '../Pages/product-Details/details'
import Pages from '../Pages'

function Routepage() {
  return (
    <Routes>
      <Route index path='/' element={<Pages />} /> 
       <Route  path='/details/:productId' element={<Details />} />
       <Route path='*' element={<Navigate to='/' />} />

    </Routes>
        
  )
}

export default Routepage