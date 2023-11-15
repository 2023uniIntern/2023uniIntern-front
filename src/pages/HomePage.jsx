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
        <div className='col-span-6 grid grid-cols-6'>

          {/* 날씨 박스 */}
          <div className='col-span-6 '>
          <Weather />
          </div>
          {/* 비디오 박스 */}
          <div className='mt-6 col-span-6'>
            <span>Live</span>
            <span>현재시간</span>
          </div>
          <div className='col-span-3'>
            일반카메라용
            <Video />

          </div>
          {/* <div className='col-span-3'>
            열화상카메라용
            <Video />

          </div> */}


        </div>
        {/* 우측 */}
        <div className='col-span-6 '>

        </div>

      </div>


    </div>
  )
}

export default HomePage