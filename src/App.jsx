import './App.css'
import Hero from './components/Hero/Hero'
import { Route, Routes } from 'react-router'
import DataPage from './components/Data/Data'

function App() {

  return (
    <>
    <Routes>
      <Route index element={<Hero/>}/>
      <Route path="/data" element={<DataPage />} />
    </Routes>
    </>
  )
}

export default App
