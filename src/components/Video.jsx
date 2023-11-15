import React, { useState, useEffect } from 'react';

const Video = () => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:5000/")
        .then(response => {
          if (!response.ok) {
            throw new Error('스트리밍을 통신할 수 없습니다.');
          }
        })
        .catch(error => {
          setError("스트리밍을 통신 할 수 없습니다.");
        });
    }, 5000); // 5초마다 체크

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 클리어
  }, []);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <img
          src="http://localhost:5000/"
          alt="Streaming from Flask Server"
          onError={() => setError('스트리밍을 통신할 수 없습니다.')}
        />
      )}
    </div>
  );
};

export default Video;
