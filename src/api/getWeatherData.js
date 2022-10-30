import axios from "axios";

export const getWeatherData = async (lat, lon) => {
    const { data } = await axios({
        method: "get",
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fbebef5fdf41f22567e1cb9c029fbdaf`,
    });

    return data;
};