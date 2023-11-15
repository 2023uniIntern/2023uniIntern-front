import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

const Weather = () => {

    const [weather, setWeather] = useState(null);
    const [refreshing, setRefreshing] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());

    // 현재 위치 가져오기
    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            // 현재 위치 정보
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            // console.log("현재 위치", lat, lon);
            getWeatherByCurrentLocation(lat, lon);
        });
    };

    // 현재 위치 날씨 API 가져오기
    const getWeatherByCurrentLocation = async (lat, lon) => {
        // &units=metric => 섭씨 사용
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=658d847ef1d28e72e047ab0c5a476d54&units=metric`;
        // url에 데이터를 가져올 때까지 기다려 주세요
        let response = await fetch(url);
        let data = await response.json();
        // weather에 데이터 담기
        setWeather(data);
        setRefreshing(false); // 새로고침 완료
    };


    useEffect(() => {
        // 현재 위치 정보
        getCurrentLocation();

        // 1초마다 현재 시간 업데이트
        const intervalID = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // 컴포넌트 언마운트 시 타이머 정리
        return () => {
            clearInterval(intervalID);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // 날씨 코드 한글화 작업
    const weatherDescKo = {
        200: '비를 동반한 천둥구름',
        201: '가벼운 비를 동반한 천둥구름',
        202: '폭우를 동반한 천둥구름',
        210: '약한 천둥구름',
        211: '천둥구름',
        212: '강한 천둥구름',
        221: '불규칙적 천둥구름',
        230: '약한 연무를 동반한 천둥구름',
        231: '연무를 동반한 천둥구름',
        232: '강한 안개비를 동반한 천둥구름',
        300: '가벼운 안개비',
        301: '안개비',
        302: '강한 안개비',
        310: '가벼운 적은비',
        311: '적은비',
        312: '강한 적은비',
        313: '소나기와 안개비',
        314: '강한 소나기와 안개비',
        321: '소나기',
        500: '악한 비',
        501: '중간 비',
        502: '강한 비',
        503: '매우 강한 비',
        504: '극심한 비',
        511: '우박',
        520: '약한 소나기 비',
        521: '소나기 비',
        522: '강한 소나기 비',
        531: '불규칙적 소나기 비',
        600: '가벼운 눈',
        601: '눈',
        602: '강한 눈',
        611: '진눈깨비',
        612: '소나기 진눈깨비',
        615: '약한 비와 눈',
        616: '비와 눈',
        620: '약한 소나기 눈',
        621: '소나기 눈',
        622: '강한 소나기 눈',
        701: '박무',
        711: '연기',
        721: '연무',
        731: '모래 먼지',
        741: '안개',
        751: '모래',
        761: '먼지',
        762: '화산재',
        771: '돌풍',
        781: '토네이도',
        800: '구름 한 점 없는 맑은 하늘',
        801: '약간의 구름이 낀 하늘',
        802: '드문드문 구름이 낀 하늘',
        803: '구름이 거의 없는 하늘',
        804: '구름으로 뒤덮인 흐린 하늘',
        900: '토네이도',
        901: '태풍',
        902: '허리케인',
        903: '한랭',
        904: '고온',
        905: '바람부는',
        906: '우박',
        951: '바람이 거의 없는',
        952: '약한 바람',
        953: '부드러운 바람',
        954: '중간 세기 바람',
    }

    // 날씨 코드를 한글 설명으로 변환
    const getWeatherDescription = (code) => {
        return weatherDescKo[code] || '날씨 정보 없음';
    };

    // 새로고침 버튼
    const handleRefreshClick = () => {
        setRefreshing(true); // 새로고침 중
        getCurrentLocation(); // 날씨 정보 다시 가져오기
    };

    // 날짜 표시 형식을 "YYYY-MM-DD HH:MM:SS" 형식으로 변경
    const formattedTime = `${currentTime.getFullYear()}-${String(currentTime.getMonth() + 1).padStart(2, '0')}-${String(currentTime.getDate()).padStart(2, '0')} ${String(currentTime.getHours()).padStart(2, '0')}:${String(currentTime.getMinutes()).padStart(2, '0')}:${String(currentTime.getSeconds()).padStart(2, '0')}`;


    return (
        <div className='grid grid-cols-12 p-7 mt-3 border border-gray-400'>

            {/* 날짜, 시간, 날씨 정보 */}
            <div className='col-span-11'>
                <p className='cursor-default text-lg' >
                    <span>{formattedTime}</span> <br/>
                    <span>현재 : {weather?.main.temp}°C</span> &nbsp;
                    <span>{getWeatherDescription(weather?.weather[0].id)}</span>
                </p>
            </div>

            {/* 새로고침 버튼 */}
            <div className='col-span-1 flex justify-center items-center'>
                <button onClick={handleRefreshClick} disabled={refreshing}>
                    {refreshing ? <FontAwesomeIcon icon={faRotateRight} spin size='lg' /> : <FontAwesomeIcon icon={faRotateRight} size='lg' />}
                </button>
            </div>
        </div>
    );
}



export default Weather