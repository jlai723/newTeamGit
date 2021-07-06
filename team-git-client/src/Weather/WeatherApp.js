import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';

import {
    Button
} from '@material-ui/core';


const WeatherApp = (props) => {

    const [weatherInfo, setWeatherInfo] = useState();

    let apiKey = "dcee62d41438be11823b7568498cc8e9";

    const fetcher = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.long}&appid=${apiKey}&units=imperial`)
            .then(res => res.json())
            .then(json => {
                setWeatherInfo(json);
                console.log(json);
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Button size="medium" variant="contained" onClick={fetcher}>What's the Weather?</Button>
            <br />
            {/* {console.log(weatherInfo)} */}
            {!weatherInfo || !weatherInfo ? null : <WeatherDisplay weatherInfo={weatherInfo} />}
        </div>
    )
}

export default WeatherApp;