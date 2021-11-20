import React, { useEffect, useState } from 'react'

const WeatherCard = ({ weatherObj }) => {

    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [weatherState, setWeatheState] = React.useState("");

    useEffect(() => {
        if (weatherObj.main) {
            switch (weatherObj.main) {
                case "Clouds":
                    setWeatheState("wi-day-cloudy");
                    break;
                case "Haze":
                    setWeatheState("wi-fog");
                    break;
                case "Clear":
                    setWeatheState("wi-day-sunny");
                    break;
                case "Mist":
                    setWeatheState("wi-dust");
                    break;

                default:
                    setWeatheState("wi-day-sunny");
                    break;
            }
        }
    }, [weatherObj.main]);

    setInterval(() => {
        let d = new Date();
        let timeStr;
        timeStr = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
        setTime(timeStr.toString());
    }, 1000);

    useEffect(() => {
        let d1 = new Date();
        let timeStr;
        timeStr = d1.getDate() + '/' + d1.getMonth() + '/' + d1.getFullYear();
        setDate(timeStr.toString());

    }, [])

    let sec = weatherObj.sunset;
    let da = new Date(sec * 1000);
    let timeStr = `${da.getHours()}:${da.getMinutes()}`;

    return (
        <div className="main-container">
            <div className="inner-container">
                <div className="top-container">
                    <i className={`wi ${weatherState}`}></i>
                </div>
                <div className="middel-container">
                    <div className="middel-1-container">
                        <span>{weatherObj.temp}&deg;</span>
                        <div className="country">
                            <p>{weatherObj.main}</p>
                            <p>{weatherObj.name}, {weatherObj.country}</p>
                        </div>
                    </div>
                    <div className="date-time">
                        <p>{time}</p>
                        <p>{date}</p>
                    </div>
                </div>
                <div className="last-container">
                    <div className="last-items">
                        <i className="wi wi-humidity"></i>
                        <div className="second-info">
                            <p>{weatherObj.humidity}</p>
                            <p>humidity</p>
                        </div>
                    </div>
                    <div className="last-items">
                        <i className="wi wi-sunset"></i>
                        <div className="second-info">
                            <p>{timeStr}</p>
                            <p>Sunset</p>
                        </div>
                    </div>
                    <div className="last-items">
                        <i className="wi wi-rain"></i>
                        <div className="second-info">
                            <p>{weatherObj.pressure}</p>
                            <p>Pressure</p>
                        </div>
                    </div>
                    <div className="last-items">
                        <i className="wi wi-strong-wind"></i>
                        <div className="second-info">
                            <p>{weatherObj.speed}</p>
                            <p>Speed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard
