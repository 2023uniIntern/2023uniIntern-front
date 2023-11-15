import React, { useState, useEffect } from 'react';

const Video = () => {
  const [error, setError] = useState(null);
  const [stream, setStream] = useState(0); // 스트림 상태 추가


  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:5000/")
        .then(response => {
          if (!response.ok) {
            // console.log("실패");
            throw new Error('스트리밍을 통신할 수 없습니다.');
          }
        })
        .catch(error => {
          // console.log("실패");
          setError('스트리밍을 통신할 수 없습니다.');
        });
    }, 10000); // 10초마다 체크

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 클리어
  }, []);

  const reconnectStream = () => {
    setError(null);
    setStream(prevKey => prevKey + 1); // 스트림 키를 증가시켜 이미지를 재로드하게 함
  };

  return (
    <div>
      {error ? (
        <>
          <p>{error}</p>
          <button onClick={reconnectStream}>재연결하기</button>
        </>
      ) : (
        <img
          key={stream} // 스트림 상태를 key로 사용
          src="http://localhost:5000/"
          alt="Streaming from Flask Server"
          onError={() => setError('스트리밍을 통신할 수 없습니다.')}
        />
      )}
    </div>
  );
};

export default Video;
