import React from 'react'
import { Route, Routes } from "react-router-dom"
// import Hero from './LandPage/Hero/Hero'
import Land from './LandPage/Land/Land'
import AuthPage from './App/pages/AuthPage'
import Stepper from './App/pages/Stepper'
import Navigation from './App/components/Navigation'
const App = () => {
  return (
    <div className="min-h-screen bg-gray-200 p-2">
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
      {/* <Hero /> */}
      {/* <Navigation /> */}
      {/* <Stepper /> */}
    </div>
  )
}

export default App