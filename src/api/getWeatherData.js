import axios from "axios";

export const getWeatherData = async (lat, lon) => {
    const { data } = await axios({
        method: "get",
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`,
    });

    return data;
};