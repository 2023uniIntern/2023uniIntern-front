import React from 'react'
import Header from '../components/Header'
import Weather from '../components/Weather'

const HomePage = () => {
  return (
    <div className='mx-auto px-6 py-3'>
      {/* 헤더 */}
      <Header />

      {/* 메인 */}
      <div className='grid grid-cols-12 p-3'>
        {/* 좌측 */}
        <div className='col-span-6 '>
          <Weather />
        </div>
        {/* 우측 */}
        <div className='col-span-6 '>

        </div>

      </div>


    </div>
  )
}

export default HomePage