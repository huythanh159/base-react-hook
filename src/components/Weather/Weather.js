import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./weather.scss"
import Search from "./Search";
import "./weather.scss";
import WeatherDay from "./Child/WeatherDay";
import WeatherByLocation from "./WeatherByLocation";



const Weather = () => {
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [title, setTitle] = useState("");
    useEffect(async () => {
        setIsLoadingData(true);
        let response = await axios({

            method: 'post',
            url: "http://localhost:8080/get-data-by-url",
            data: { url: "https://www.metaweather.com/api/location/1236594/" }
        });
        setTimeout(() => {
            setTitle(response.data.title)
        }, 0);
        setIsLoadingData(false);
    }, []);

    return (

        <div className="weather-app-container">
            {
                isLoadingData &&
                <div>Loading data...</div>
            }
            <Search />
            <hr />
            <WeatherByLocation
                woeidFromParent={"1252431"}
            />
            <hr />
            <WeatherByLocation
                woeidFromParent={"1118550"}
            />
        </div>
    )
}
// class Weather extends React.Component {
//     state = {
//         title: ""
//     }
//     async componentDidMount() {
//         // axios.get("https://www.metaweather.com/api/location/1236594/");

//         let response = await axios({
//             method: 'post',
//             url: "http://localhost:8080/get-data-by-url",
//             data: { url: "https://www.metaweather.com/api/location/1236594/" }
//         });
//         this.setState({
//             title: response.data.title
//         })
//     }
//     render() {
//         return (
//             <div>inside weather title ={this.state.title}</div>
//         )
//     }
// }
export default Weather;