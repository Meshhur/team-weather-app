import React, { useState } from 'react';
import { kelvinsToCelcius } from '../../utils/kelvinsToCelcius';
import { metersTokilometers } from '../../utils/metersTokilometers';
import { getColor } from '../../utils/getColor';
import { useWeather } from '../../hooks/useWeather';
import { useEffect } from 'react';
import { getCardinalDirection } from "../../utils/getCardinalDirection"
import "./WeatherCard.css";


export const WeatherCard = () => {


    const data = useWeather();
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        data.then(res => setWeather(res));
    }, [])
    return (
        <main className='main'>
            <div className="info-weather">
                <div className="sides left-side">
                    <span className={`${getColor(kelvinsToCelcius(weather?.main?.temp))} title-temp`}>
                        <span>{kelvinsToCelcius(weather?.main?.temp)}°C,</span>
                        <span> {weather?.weather[0]?.main}</span>
                    </span>
                    <Row title='Min' value={`${kelvinsToCelcius(weather?.main?.temp_min)}°C`} />
                    <Row title='Max' value={`${kelvinsToCelcius(weather?.main?.temp_max)}°C`} />
                    <Row title='Humidity' value={`${weather?.main?.humidity}%`} />
                </div>
                <div className="sides right-side">
                    <Row title='City' value={weather?.name} />
                    <Row title='Visibility' value={`${metersTokilometers(weather?.visibility)}km`} />
                    <Row title='Wind' value={`${weather?.wind?.speed} m/s`} />
                    <Row title='Direction' value={getCardinalDirection(weather?.wind?.deg)} />
                </div>
            </div>
        </main>
    );
};

const Row = ({ title, value }) => {
    return (
        <span>
            <span>{title}: </span>
            <span>{value}</span>
        </span>
    )
}