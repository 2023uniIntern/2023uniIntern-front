import React, { useState, useEffect } from 'react';

// 외부API(로딩)
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Video = () => {
  const [error, setError] = useState(null);
  const [stream, setStream] = useState(0); // 스트림 상태 추가
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:5000/")
        .then(response => {
          if (!response.ok) {
            throw new Error('스트리밍을 통신할 수 없습니다.');
          }
        })
        .catch(error => {
          setError('스트리밍을 통신할 수 없습니다.');
        })
        .finally(() => {
          setIsLoading(false); // 로딩 상태 업데이트
        });
    }, 10000); // 10초마다 체크

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 클리어
  }, []);

  const reconnectStream = () => {
    setError(null);
    setIsLoading(true); // 재시도 시 로딩 상태 업데이트
    setStream(prevKey => prevKey + 1); // 스트림 키를 증가시켜 이미지를 재로드하게 함
  };

  return (
    <div className="bg-black rounded-lg shadow-xl flex justify-center items-center overflow-hidden cursor-default">
      {isLoading ? (
        <div className="w-full text-white text-center p-3 flex items-center justify-center" style={{ height: '320px' }}>
          <FontAwesomeIcon icon={faSpinner} spinPulse size="2xl" />
        </div>
      ) : error ? (
        <div className="w-full text-white text-center p-3 flex flex-col items-center justify-center" style={{ height: '320px' }}>
          <p className="block">{error}</p>
          <p className='block mt-5 hover:bg-white hover:text-black rounded-full border border-white p-3 cursor-pointer'
            onClick={reconnectStream}>
            연결 시도하기
          </p>
        </div>
      ) : (
        <img
          key={stream} // 스트림 상태를 key로 사용
          src="http://localhost:5000/"
          alt="Streaming from Flask Server"
          onError={() => {
            setError('스트리밍을 통신할 수 없습니다.');
            setIsLoading(false); // 에러 발생 시 로딩 상태 업데이트
          }}
        />
      )}
    </div>
  );
};

export default Video;
