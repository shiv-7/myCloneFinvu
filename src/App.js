import React from 'react'
import Home from './components/templates/Home'

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Solutions from './components/templates/Solutions'
import Products from './components/templates/Products'
import Navbar from './components/organism/header/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/myCloneFinvu' element = {<Home/>}/>
        <Route path='/products' element = { <Products/> }/>
        <Route path='/solutions' element = {<Solutions/>}/>

      </Routes>
    </BrowserRouter>

  )
}

export default App