import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navigation from './components/UI-Comp/Header/Navigation'


function App() {
  const [count, setCount] = useState(0)

  return (
  //   <BrowserRouter >
  //     <Routes>
  // <Route path='/' element={}></Route>
  // <Route path='/register' element={}></Route>
  // <Route path='/login' element={}></Route>
  // <Route path='/home' element={}></Route>
  // <Route path='/cart' element={}></Route>
  // <Route path='/' element={}></Route>
  // <Route path='/' element={}></Route>
  // <Route path='/' element={}></Route>

  //     </Routes>
    
  //   </BrowserRouter>

  <Navigation />
  )
}

export default App
