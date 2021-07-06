import React from "react"
import {useState, useEffect} from "react";
import NasaDisplay from "../nasa/NasaDisplay";

const NasaApp = (props) => {
    const url = `https://api.nasa.gov/planetary/earth/assets?lon=${props.long}&lat=${props.lat}&&dim=0.07&api_key=BLcnhcKA00Yu9E4TtarQeorQbTq0C4mrQiJRvM0e`;
    const [image, setImage] = useState('');


useEffect(() => {
    fetch(url) 
    .then(res => res.json())
    .then(json => {
        setImage(json.url)
    console.log(json)
    }) 
}, [url]) 


return(
    <div>
    {!image || !image ? null : <NasaDisplay image = {image} /> }  
    </div>
)
}


export default NasaApp;