import './App.css'
import { Cards } from './Components/Cards'
import { Routes, Route } from 'react-router-dom'
import { CardInfo } from './Components/CardInfo'
import { Header } from './Components/Header'

function App() {

  return (
    <>
      
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Cards />
          </>
        } />
        <Route path="/cat-info" element={<CardInfo />} />
      </Routes>
      
    </>
  )
}

export default App
