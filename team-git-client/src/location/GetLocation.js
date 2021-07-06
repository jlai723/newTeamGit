import React, { useEffect, useState } from 'react';

import TicketMasterApp from '../ticketmaster/TicketMasterApp';
import WeatherApp from '../Weather/WeatherApp';
import NasaApp from '../nasa/NasaApp';

const GetLocation = () => {
    const [lat, setLat] = useState();
    const [long, setLong] = useState();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat (position.coords.latitude);
            setLong (position.coords.longitude);
        }) 
    }, [])

    
    return (
        <div>
            <h4>Current location is: {lat} + {long}</h4>
            <WeatherApp lat={lat} long={long} />
            <NasaApp lat={lat} long={long} />
            <TicketMasterApp lat={lat} long={long} />
        </div>
    )
}

export default GetLocation;