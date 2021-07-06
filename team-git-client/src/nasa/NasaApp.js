import React from "react"
import {useState, useEffect} from "react";

const NasaApp = (props) => {
    const [image, setImage] = useState('');

// fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${props.long}&lat=${props.lat}&&dim=0.35&api_key=BLcnhcKA00Yu9E4TtarQeorQbTq0C4mrQiJRvM0e`)

//fetch("https://api.nasa.gov/planetary/earth/imagery?lon=-86.03&lat=39.90&api_key=BLcnhcKA00Yu9E4TtarQeorQbTq0C4mrQiJRvM0e")
// .then(res => res.json())
// .then(json => {
// console.log(json)
// })

return(
    <div> 
        <h1>NASA</h1>
    </div>
)



}


export default NasaApp;