
import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import User from './components/User';
import Update from './components/Update';
import CreateUser from './components/CreateUser';


function App() {

  return (
    <>

    <BrowserRouter>
        <Routes>
          <Route path='/' element={<User />} />
          <Route path='/create' element={<CreateUser />} />
          <Route path='/update/:id' element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App