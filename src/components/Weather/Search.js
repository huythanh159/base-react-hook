import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./weather.scss";
import _ from "lodash";
import { useHistory } from "react-router-dom";
const Search = () => {
    const [keyword, setKeyword] = useState("");
    const [locationArr, setLocationArr] = useState([]);
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [isFocusInput, setIsFocusInput] = useState(false);
    let history = useHistory();

    const handleSeachBtn = async () => {
        setIsLoadingData(true);
        setLocationArr([]);
        let response = await axios({
            method: "post",
            url: "http://localhost:8080/get-data-by-url",
            data: { url: `https://www.metaweather.com/api/location/search/?query=${keyword}` }
        });
        if (response && response.data) {
            let result = response.data;
            let _locationArr = [];
            if (!_.isEmpty(result)) {
                //mang result  not empty
                for (const key in result) {
                    _locationArr.push(result[key])
                }
                setLocationArr(_locationArr);
                console.log("check arr", _locationArr)
            } else {
                //mang result is empty
                setLocationArr([]);
            }
        }
        setIsLoadingData(false);
        setIsFocusInput(false);

    }
    const handleViewBtn = (woeid) => {
        history.push(`/Weather/Detail/${woeid}`);

    }

    // const [title, setTitle] = useState("");
    // const [keyword, setKeyword] = useState("");
    // const [locationArr, setLocationArr] = useState([]);
    // let history = useHistory();
    // const handleClickBtn = async () => {

    //     let response = await axios({
    //         method: 'post',
    //         url: "http://localhost:8080/get-data-by-url",
    //         data: { url: `https://www.metaweather.com/api/location/search/?query=${keyword}` } //template string
    //     });

    //     if (response && response.data) {
    //         let result = response.data;
    //         let _locationArr = [];
    //         if (!_.isEmpty(result)) {
    //             //not empty
    //             for (const key in result) {
    //                 _locationArr.push(result[key]);
    //             }
    //             setLocationArr(_locationArr);
    //         }
    //         else {
    //             //empty
    //             setLocationArr([]);
    //         }
    //         console.log("result", result)
    //     }
    // }
    // const handleViewDetail = (woeid) => {
    //     history.push(`/weather/detail/${woeid}`);

    // }
    // return (

    //     <div className="search-weather-container">
    //         <div className="search-inputs">
    //             <input
    //                 placeholder="Enter a location"
    //                 type="text"
    //                 onChange={(event) => setKeyword(event.target.value)}
    //             />
    //             <button type="button" onClick={() => handleClickBtn()}>Search</button>
    //         </div>
    //         <div className="result-container">
    //             {locationArr && locationArr.length > 0 &&
    //                 locationArr.map((item, index) => {
    //                     return (
    //                         <div className="result-child" key={`location-${index}`}>
    //                             <div className="title">Title: {item.title}</div>
    //                             <div className="type">Type: {item.location_type}</div>
    //                             <div className="woeid"><span onClick={() => handleViewDetail(item.woeid)}>woeid: {item.woeid}</span></div>
    //                             <div className="latt_long">latt_long: {item.latt_long}</div>
    //                         </div>
    //                     )
    //                 })
    //             }
    //         </div>
    //     </div>

    // )

    return (
        <div className="search-weather-container">
            <div className="search-inputs">
                <input type="text"
                    placeholder="Enter a keyword for location"
                    onChange={(event) => setKeyword(event.target.value)}
                    onFocus={() => setIsFocusInput(true)}
                />
                <button type="button"
                    onClick={() => handleSeachBtn()}
                >Search</button>
            </div>
            {
                isLoadingData &&
                <div style={{ padding: "15px" }}>Loading data...</div>
            }
            <div className="result-container">
                {locationArr && locationArr.length > 0 &&
                    locationArr.map((item, index) => {
                        return (
                            <div className="result-child" key={index} >
                                <div className="title">Title: {item.title}</div>
                                <div className="type">Type Location: {item.location_type}</div>
                                <div className="woeid">

                                    <span onClick={() => handleViewBtn(item.woeid)}
                                        title="Click to view details">
                                        <b>Woeid:--- {item.woeid} ---</b>
                                    </span>

                                </div>
                                <div className="latt_long">Latt Long: {item.latt_long}</div>
                            </div>
                        )
                    })
                }
                {
                    !isFocusInput && keyword && locationArr && locationArr.length === 0 &&
                    <div>Not found data with keyword = {keyword}</div>
                }
            </div>
        </div>
    )
}
export default Search;