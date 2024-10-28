import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Homepage from './pages/Homepage'

function App() {
 

  return(
    <>

<BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    
    </BrowserRouter>
    

    </>
  )
}

export default App