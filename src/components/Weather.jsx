import { useEffect, useState } from 'react';

// 컴포넌트
import Clock from './Clock';

// 외부API(아이콘)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet, faRotateRight, faTemperatureHalf } from '@fortawesome/free-solid-svg-icons';

const WeatherTest = () => {

    const [weather, setWeather] = useState(null);
    const [refreshing, setRefreshing] = useState(false);

    const getCurrentLocation = () => {
        // 현재 위치 가져오기
        navigator.geolocation.getCurrentPosition((position) => {
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
        // console.log(weather); // 날씨 정보
    };

    const handleRefreshClick = () => {
        setRefreshing(true);
        getCurrentLocation();
        setTimeout(() => {
            setRefreshing(false);
        }, 1000); // 1초 뒤 새로고침 재활성화
    };


    useEffect(() => {
        getCurrentLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getIconUrl = (iconCode) => {
        // 아이콘 이미지를 가져올 URL
        return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    };

    return (
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden cursor-default">

            <div className="p-5">
                <div className="flex justify-center items-center">
                    <div>
                        <span className="text-gray-700 text-lg font-bold"><Clock /></span>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <div className="mt-3 flex justify-between items-center">
                        {weather && weather.weather && weather.weather[0] && (
                            <img src={getIconUrl(weather.weather[0].icon)} alt="Weather Icon" />
                        )}
                    </div>
                </div>

                <div className="flex grid grid-cols-2 text-center">
                    <div className='col-span-1'>
                        <span className="text-gray-500">  <FontAwesomeIcon icon={faTemperatureHalf} />온도</span>
                        <span className="block text-xl font-bold">{weather?.main.temp.toFixed(1)}°C</span>
                    </div>
                    <div className='col-span-1'>
                        <span className="block text-gray-500"> <FontAwesomeIcon icon={faDroplet} />습도</span>
                        <span className="block text-xl font-bold">{weather?.main.humidity}%</span>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 p-5">
                <div className="flex justify-between items-center">
                    <span className="text-gray-700 text-sm">UPDATE</span>
                    <button onClick={handleRefreshClick} disabled={refreshing}>
                        {refreshing ? <FontAwesomeIcon icon={faRotateRight} spin size='lg' /> : <FontAwesomeIcon icon={faRotateRight} size='lg' />}
                    </button>
                </div>
            </div>

        </div>
    )
}

export default WeatherTest