import React, {useState} from "react";

function Earth(){

    const [earth, setearth] = useState(null)

    async function earthImg(){
        const response = await fetch(' https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=Z9bR1Ap3kxcemutOlTFeyytrk4dg8ZUeHDEi9Fmh  ')
        const earthData = await response.json();
        //console.log(earthData.photos[0]);
        setearth(earthData.photos[1].img_src)
    }
earthImg()



    return(
        <div className="earthWrapper">
            <div>
            <img src={earth} alt="" className="mars" />
            </div>
        </div>
    )
}


export default Earth;