import React from 'react'
import Header from '../components/Header'
import Weather from '../components/Weather'

const HomePage = () => {
  return (
    <div className='mx-auto px-6 py-3'>
      <Header></Header>
      <div className='grid grid-cols-12'>

        <Weather/>


      </div>
    </div>
  )
}

export default HomePage