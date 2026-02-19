import { HomePage } from './pages/HomePage'
import { Checkout } from './pages/Checkout'
import './App.css'
import { Routes , Route } from 'react-router'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='checkout' element={<Checkout />}></Route>
      </Routes>
    </>
  )
}

export default App
