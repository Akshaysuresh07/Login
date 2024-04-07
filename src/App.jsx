import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Login from './Components/Login'

function App() {
 

  return (
    <>
    
     <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
     </Routes>
    </>
  )
}




export default App
