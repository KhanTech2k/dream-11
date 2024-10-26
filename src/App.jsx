import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Players from './components/Players'
import Footer from './components/Footer'
import Subscribe from './components/Subscribe'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [credit, setCredit] = useState(0)
  const handleFreeCredit = () => {
    setCredit((credit) => credit + 1000000)
  }
  const handleDeductPrice = (biddingPrice) => {
    if (credit >= biddingPrice) {
      setCredit((credit) => credit - biddingPrice);
    } else {
      alert("Insufficient");
    }
  }
  return (
    <>
      <Navbar credit={credit}></Navbar>
      <Banner handleFreeCredit={handleFreeCredit}></Banner>
      <Players credit={credit} handleDeductPrice={handleDeductPrice}></Players>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </>
  )
}
export default App