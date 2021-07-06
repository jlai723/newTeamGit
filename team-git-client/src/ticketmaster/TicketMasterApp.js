import React, { useEffect, useState } from 'react';
import {
    Button
} from '@material-ui/core';

import TMSearch from './TicketMasterSearch';
import TMDisplay from './TicketMasterDisplay';

const TicketMasterApp = (props) => {
    const [endDateTime, setEndDateTime] = useState("");
    const [result, setResult] = useState();

    // const currentDate = new Date();
    // const futureDate = new Date(currentDate);

    // const futureDate = (dt, n) => {
    //     return new Date(dt.setMonth(dt.getMonth() + n));
    // }

    // const dt = new Date();
    // setEndDateTime(futureDate(dt, 1));

    const fetcher = () => {
        const staticEndDate = "2021-08-03T00:00:00Z";
        const staticRadius = "20";
        const staticUnit = "miles"
        const staticSort = "date,asc"
        const apiKey = "tNGTJR4arQoc6d5dHyQ4HOamibbgtO8g";
        fetch(`https://app.ticketmaster.com/discovery/v2/events.json?latlong=${props.lat},${props.long}&radius=${staticRadius}&unit=${staticUnit}&endDateTime=${staticEndDate}&sort=${staticSort}&apikey=${apiKey}`)
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('Fetch Error');
                } else return res.json();
            })
            .then(json => {
                setResult(json._embedded.events);
                console.log(json._embedded.events);
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {/* <TMSearch /> */}
            <Button size="medium" color="primary" variant="contained" onClick={fetcher}>Find Events Nearby!</Button>
            <TMDisplay result={result} />
            {/* {console.log(currentDate)} */}
        </div>
    )
}

export default TicketMasterApp;

// https://app.ticketmaster.com/discovery/v2/events?apikey=tNGTJR4arQoc6d5dHyQ4HOamibbgtO8g&locale=*&geoPoint=dp4ffxb79