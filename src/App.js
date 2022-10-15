import './App.css';
import { useWeather } from './hooks/useWeather';
import { WeatherCard } from './components/weatherCard/WeatherCard';

function App() {
    const weather = useWeather();
    
    return (
        <WeatherCard />
    );
}

export default App;
