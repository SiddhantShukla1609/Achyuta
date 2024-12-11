import { useState } from 'react'


import Navbar from './Navbar'
import Footer from './Footer'
import DiabetesInfo from './DiabetesInfo'
import FormComponent from './FormComponent'


function App() {
  const [count, setCount] = useState(0)
  
    

  return (
    <>
   <Navbar/>
   <DiabetesInfo/>
   <FormComponent/>
   <Footer/>
    </>
  )
}

export default App
