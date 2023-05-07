import { useState } from 'react'
import './assets/App.css'
import PayForm from './components/PayForm'
import Navbar from './components/Navbar'
import Chart from './components/Chart'
import PayedTable from './components/PayedTable'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Chart currentAmount={500} targetAmount={1000}/>
      <PayForm />
      <PayedTable />
      <Footer />
    </>
  )
}

export default App
