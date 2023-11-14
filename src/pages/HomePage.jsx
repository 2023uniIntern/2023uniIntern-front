import React from 'react'
import Header from '../components/Header'
import Weather from '../components/Weather'
import Video from '../components/Video'

const HomePage = () => {
  return (
    <div className='mx-auto p-3 gap-4'>
      {/* 헤더 */}
      <Header />

      {/* 메인 */}
      <div className='grid grid-cols-12 p-3'>
        {/* 좌측 */}
        <div className='col-span-6 '>
          <Weather />
          <Video/>
        </div>
        {/* 우측 */}
        <div className='col-span-6 '>

        </div>

      </div>


    </div>
  )
}

export default HomePage