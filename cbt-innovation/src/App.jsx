import React from 'react'
// import Hero from './LandPage/Hero/Hero'
import Land from './LandPage/Land/Land'
import AuthPage from './App/pages/AuthPage'
import Stepper from './App/pages/Stepper'
const App = () => {
  return (
    <div className="min-h-screen bg-gray-200 p-2">
      {/* <h1 className="text-4xl font-bold">Hello, Tailwind CSS!</h1> */}
      {/* <Land /> */}
      <Stepper />
      {/* <AuthPage /> */}
    </div>
  )
}

export default App