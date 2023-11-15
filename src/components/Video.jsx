import React, { useState } from 'react';

const Video = () => {
  const [isError, setIsError] = useState(false); // 오류 상태 관리

  // 이미지 로딩 실패 시 호출되는 함수
  const handleError = () => {
    setIsError(true);
  };

  // 연결 재시도
  const retryConnection = () => {
    setIsError(false);
  };

  return (
    <div className='border border-gray-400 mt-6 flex justify-center items-center'>
      {isError ? (
        <div>
          <p>연결에 실패했습니다.</p>
          <button onClick={retryConnection}>다시 시도하기</button>
        </div>
      ) : (
        <img 
          src="http://localhost:5000/" 
          alt="Streaming from Flask Server" 
          onError={handleError} // 이미지 로딩 실패 시 handleError 호출
        />
      )}
    </div>
  );
};

export default Video;
