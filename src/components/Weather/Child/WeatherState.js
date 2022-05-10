import "./Child.scss"
const WeatherState = (props) => {
    const weatherState = props.weatherState;
    const allIconState = {
        "Snow": "sn",
        "Sleet": "sl",
        "Hali": "h",
        "Thunderstorm": "t",
        "Heavy Rain": "hr",
        "Light Rain": "lr",
        "Showers": "s",
        "Heavy Cloud": "hc",
        "Light Cloud": "lc",
        "Clear": "c",
    }
    const getWeatherIcon = (weatherState) => {
        const fetchIcon = allIconState[weatherState]
        return `https://www.metaweather.com//static/img/weather/${fetchIcon}.svg`;
    }
    return (
        <div className="weather-state-container">
            <div className="state-icon">
                <img src={getWeatherIcon(weatherState)} />
            </div>
            <div className="state-name">
                {weatherState}
            </div>
        </div>
    )
}
export default WeatherState;