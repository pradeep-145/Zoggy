import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navigation from './components/UI-Comp/Header/Navigation'
import Login from './components/Authentication-Comp/Login'
import Register from './components/Authentication-Comp/Register'
import Home from './components/Pages-Comp/Home'
import Landing from './components/Pages-Comp/Landing'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BrowserRouter >
  <Routes>
  <Route path='/' element={<Landing />}></Route>
  <Route path='/register' element={ <Register />}></Route>
  <Route path='/login' element={<Login />}></Route>
  <Route path='/home' element={<Home />}></Route>
  {/* <Route path='/cart' element={}></Route>
  <Route path='/' element={}></Route>
  <Route path='/' element={}></Route>
<Route path='/' element={}></Route> */}
  </Routes>    
  </BrowserRouter>
</>
  )
}

export default App
