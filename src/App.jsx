import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Players from './components/Players'

function App() {
  const [credit,setCredit]=useState(0)
  const handleFreeCredit =()=>{
    setCredit((credit)=>credit +1000000)
  }
  const handleDeductPrice = (biddingPrice) =>{
    if (credit >= biddingPrice) {
      setCredit((credit) => credit - biddingPrice);
    } else {
      alert("Insufficient");
    }
  }
  return (
    <>
    <Navbar  credit={credit}></Navbar>
    <Banner handleFreeCredit={handleFreeCredit}></Banner>
    <Players credit={credit}  handleDeductPrice={handleDeductPrice}></Players>
    </>
  )
}
export default App