import React, { useEffect, useState } from 'react';

import TicketMasterApp from '../ticketmaster/TicketMasterApp';
import WeatherApp from '../Weather/WeatherApp';
import NasaApp from '../nasa/NasaApp';
import loading from '../assets/Pulse-1s-200px.gif';

const GetLocation = () => {
    const [lat, setLat] = useState();
    const [long, setLong] = useState();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        })
    }, [])


    return (
        <div>
            {!(lat && long) || !(lat && long) ? <img src={loading} /> : 
            <div>
            <WeatherApp lat={lat} long={long} />
            <NasaApp lat={lat} long={long} />
            <TicketMasterApp lat={lat} long={long} />
            </div>            
            }
        </div>
    )
}

export default GetLocation;