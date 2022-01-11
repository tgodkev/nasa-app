import React, { useState } from "react";

function Nasa(){

const [firstAstroid, setFirstAstroid] = useState('');
const [firstMiss, setfirstMiss] = useState('');
const [firstSpeed, setfirstSpeed] = useState('');

const [secondAstroid, setsecondAstroid] = useState('');
const [secondMiss, setsecondMiss] = useState('');
const [secondSpeed, setsecondSpeed] = useState('');

const [thirdAstroid, setthirdAstroid] = useState('');
const [thirdMiss, setthirdMiss] = useState('');
const [thirdSpeed, setthirdSpeed] = useState('');



    async function astroid(){

        const response = await fetch ('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=Z9bR1Ap3kxcemutOlTFeyytrk4dg8ZUeHDEi9Fmh ')
        const nasaData = await response.json()

        //console.log(nasaData.near_earth_objects[0].close_approach_data[17])
        setFirstAstroid(nasaData.near_earth_objects[0].close_approach_data[15].close_approach_date_full);
        setfirstMiss(nasaData.near_earth_objects[0].close_approach_data[15].miss_distance.miles);
        setfirstSpeed(nasaData.near_earth_objects[0].close_approach_data[15].relative_velocity.miles_per_hour);


        setsecondAstroid(nasaData.near_earth_objects[0].close_approach_data[16].close_approach_date_full);
        setsecondMiss(nasaData.near_earth_objects[0].close_approach_data[16].miss_distance.miles);
        setsecondSpeed(nasaData.near_earth_objects[0].close_approach_data[16].relative_velocity.miles_per_hour);

        setthirdAstroid(nasaData.near_earth_objects[0].close_approach_data[17].close_approach_date_full);
        setthirdMiss(nasaData.near_earth_objects[0].close_approach_data[17].miss_distance.miles);
        setthirdSpeed(nasaData.near_earth_objects[0].close_approach_data[17].relative_velocity.miles_per_hour)

    }

        astroid();


    return(
        <div className="wrapper">
        <div className="astroid">
            <h2> {firstAstroid}</h2>
            <h2> Miss Distance {firstMiss} miles.</h2>
            <h2>Astroid Speed {firstSpeed} mph </h2>
            </div>
            

            <div className="astroid">
            <h2> {secondAstroid}</h2>
            <h2> Miss Distance {secondMiss} miles.</h2>
            <h2>Astroid Speed {secondSpeed} mph </h2>
            </div>

            <div className="astroid">
            <h2> {thirdAstroid}</h2>
            <h2> Miss Distance {thirdMiss} miles.</h2>
            <h2>Astroid Speed {thirdSpeed} mph </h2>
            </div>

        </div>
    )
}


export default Nasa;