// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Players from './components/Players'

function App() {
  // const [selectedPlayers, setSelectedPlayers] =useState([]);
  const handleSelectedPlayers=(player)=>{
    console.log(player)
  }
  const [credit,setCredit]=useState(0)
  const handleFreeCredit =()=>{
    setCredit((credit)=>credit +10000000)
  }
  
  return (
    <>
    <Navbar credit={credit}></Navbar>
    <Banner handleFreeCredit={handleFreeCredit}></Banner>
    <Players handleSelectedPlayers={handleSelectedPlayers} ></Players>
    </>
  )
}

export default App