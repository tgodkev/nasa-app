import React, {useState} from 'react';



function Header(){

    const [nasaImage, setnasaImage] = useState(null)
    const [explanation, setexplanation] = useState('')
    const [title, settitle] = useState('')
    const [date, setdate] = useState('')

  async function nasaImg(){
    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=Z9bR1Ap3kxcemutOlTFeyytrk4dg8ZUeHDEi9Fmh&thumbs=true', )
    const nasaImgData = await response.json();

    console.log(nasaImgData);

    setnasaImage(nasaImgData.url)
    setexplanation(nasaImgData.explanation)
    settitle(nasaImgData.title)
    setdate(nasaImgData.date)
   
  }

  nasaImg();

    return(
        <div className='apod'>
            <h2>{title}</h2>
            <img src={nasaImage} alt="" className='apod'  />
            <h5>{date}</h5>
            <p>{explanation}</p>
        </div>
    )
}

export default Header;