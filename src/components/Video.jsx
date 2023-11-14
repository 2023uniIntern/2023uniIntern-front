import React, { Component } from 'react';

class Video extends Component {
  constructor(props) {
    super(props);
    // 초기 상태 설정
    this.state = {
      videoUrl: 'http://localhost:5000/', // 비디오 스트리밍 URL
      serverConnectionFailed: false // 서버 연결 실패 상태
    };
  }

  handleVideoError = () => {
    // 현재 상태가 실패한 상태가 아닌 경우에만 처리
    if (!this.state.serverConnectionFailed) {
      // 영상 로드 실패 시 호출되는 함수
      this.setState({ serverConnectionFailed: true });

      // 오류 발생 시 20초 후 페이지 자동 새로 고침
      setTimeout(() => {
        // 새로 고침 전에 다시 상태를 정상으로 변경
        window.location.reload(); // 페이지 새로고침을 트리거
        this.setState({ serverConnectionFailed: false });
      }, 20000); // 20초 후에 실행
    }
  }

  retryConnection = () => {
    // '다시 시도하기' 버튼을 클릭할 때 호출되는 함수
    // 서버 연결 실패 상태를 초기화
    this.setState({ serverConnectionFailed: false });
  }

  render() {
    return (
      <div className="border border-gray-400 flex justify-center">


        {this.state.serverConnectionFailed ? (
          // 서버 연결 실패 시 보여지는 UI
          <div>
            <p>서버와의 연결에 실패했습니다.</p>
            <button onClick={this.retryConnection}>다시 시도하기</button>
          </div>
        ) : (
          // 서버 연결이 성공적인 경우 비디오 스트리밍을 표시하는 img 태그
          <img
            src={this.state.videoUrl}
            alt="Streaming from Flask Server"
            onError={this.handleVideoError}
            style={{ width: '100%' }}
          />
        )}
      </div>

    );
  }
}

export default Video;
