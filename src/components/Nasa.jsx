import React, { useState } from "react";

function Nasa(){

const [firstAstroid, setFirstAstroid] = useState('')
const [firstMiss, setfirstMiss] = useState('')
const [firstSpeed, setfirstSpeed] = useState('')

    async function nasaImg(){
        //const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=Z9bR1Ap3kxcemutOlTFeyytrk4dg8ZUeHDEi9Fmh')
        const response = await fetch ('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=Z9bR1Ap3kxcemutOlTFeyytrk4dg8ZUeHDEi9Fmh ')
        const nasaData = await response.json()

        console.log(nasaData.near_earth_objects[0].close_approach_data[15].relative_velocity.miles_per_hour)
        setFirstAstroid(nasaData.near_earth_objects[0].close_approach_data[15].close_approach_date_full)
        setfirstMiss(nasaData.near_earth_objects[0].close_approach_data[15].miss_distance.miles)
        setfirstSpeed(nasaData.near_earth_objects[0].close_approach_data[15].relative_velocity.miles_per_hour)
    }

        nasaImg();


    return(
        <div>
            <h2> {firstAstroid}</h2>
            <h2> Miss Distance {firstMiss} miles.</h2>
            <h2>Astroid Speed {firstSpeed} mph </h2>
        </div>
    )
}


export default Nasa;