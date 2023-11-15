import React from 'react'
import Header from '../components/Header'
import Weather from '../components/Weather'
import Video from '../components/Video'

const HomePage = () => {
  return (
    <div className='container mx-auto p-3 gap-4'>
      {/* 헤더 */}
      <Header />

      {/* 메인 */}
      <div className='grid grid-cols-12'>
        {/* 첫줄 */}
        <div className='col-span-12 grid grid-cols-6 mt-6'>
          {/* 시간 & 날씨 박스 */}
          <div className='col-span-3'>
            <Weather />
          </div>
          {/* 알림 박스 */}
          <div className='col-span-3'>

          </div>
        </div>


        <div className='col-span-12 grid grid-cols-12 mt-6'>


          {/* 시간 &  비디오 박스 */}
          <div className='col-span-3'>
            <Video />
          </div>

          {/* <div className='col-span-3'>
            열화상카메라용
            <Video />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default HomePage