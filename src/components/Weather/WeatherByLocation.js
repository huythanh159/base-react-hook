import {
    useLocation
} from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import WeatherState from "./Child/WeatherState";
import { useHistory } from "react-router-dom";
import WeatherDay from "./Child/WeatherDay";
import _ from "lodash";
import moment from "moment";
import "moment-timezone";
const WeatherByLocation = (props) => {
    let history = useHistory();

    const handleBack = () => {
        history.push("/Weather")
    }
    //lay ra du kieu cua location object
    const [weatherLocation, setWeatherLocation] = useState({});
    useEffect(() => {
        getWeatherLocation();
    }, [])
    let { woeid } = useParams();
    const getWeatherLocation = async () => {
        if (!woeid) {
            woeid = props.woeidFromParent;
        }
        let response = await axios({
            method: "post",
            url: "http://localhost:8080/get-data-by-url",
            data: { url: `https://www.metaweather.com/api/location/${woeid}/` }

        });
        console.log(">>>", weatherLocation)
        if (response && response.data) {
            setWeatherLocation(response.data);
        }

    }
    return (

        <div className="w-b-l-container">
            {/* {
                !props.woeidFromParent &&
                <div className="back">
                    <span onClick={() => handleBack()}>BACK</span>
                </div>} */}

            <div className="list-weather-day">
                {!_.isEmpty(weatherLocation) && weatherLocation.consolidated_weather
                    && weatherLocation.consolidated_weather.length > 0
                    && weatherLocation.consolidated_weather.map((item, index) => {

                        return (
                            <div className={`weather-day${index}`} key={`weatherday-${index}`}>
                                {index === 0 &&
                                    <div className="location-data">
                                        <div className="title">
                                            <div className="location-title">{weatherLocation.title}</div>
                                            <div className="country-title">{weatherLocation.parent.title}</div>
                                        </div>
                                        <div className="time">
                                            {moment(weatherLocation.time).tz(weatherLocation.timezone).format("hh:mm:ss A")}
                                        </div>

                                    </div>
                                }
                                <WeatherDay
                                    dataWeather={item} />
                            </div>
                        )
                    })
                }
            </div>
            {/* <WeatherState
                weatherState={"Light Cloud"}
            /> */}
            {/* <WeatherDay /> */}
        </div>
    )
}
export default WeatherByLocation;