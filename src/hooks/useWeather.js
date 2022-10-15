import { useEffect, useState } from "react";
import { getWeatherData } from "../api/getWeatherData";

export const useWeather = () => {
    const [geoLocation, setGeolocation] = useState({
        lat: 37.862499,
        lon: 58.238056
    });

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setGeolocation({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                });
            });
        } else {
            console.log("Geolocation isn't supported by this browser");
        }
    }, [])

    return getWeatherData(geoLocation.lat, geoLocation.lon);

}