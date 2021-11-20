import React, { useState, useEffect } from 'react'
import Search from './search'
import WeatherCard from './WeatherCard'

const Weather = () => {

    const [city, setCity] = useState("surat");
    const [weatherObj, setweatherObj] = useState("");
    
    const getSeachData = (cityName) => {
        setCity(cityName);
        fetchAPI();
    }

    useEffect(() => {
        fetchAPI();
    }, [])

    let fetchAPI = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=80d860b2b0ca9383c7abe860939fa3c3`).then(res => res.json()).then((data) => {
            const { temp, humidity, pressure } = data.main;
            const { main } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            const obj = {
                temp,
                humidity,
                pressure,
                main,
                name,
                speed,
                country,
                sunset,
            };
            setweatherObj(obj);
        });
    };

    return (
        <>
            <Search getSeachData={getSeachData} />
            <WeatherCard  weatherObj={weatherObj} />
        </>
    )
}

export default Weather
