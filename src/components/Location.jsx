import { useState } from "react";

function Location() {
    const [myLocation, setMyLocation] = useState("");

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            setMyLocation("Geolocation is not supported by this browser.");
        }
    }

    function showPosition(position) {
        setMyLocation("Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude);
    }

    return(
        <>
            <h1>{myLocation}</h1>

            <button onClick={getLocation}>Mostrar Localização</button>
        </>
    )
}

export default Location