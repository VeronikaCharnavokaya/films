import { films } from "./data";
import { useState } from "react";
import "./App.css";


function Slide() {


    const [filmImage,setfilmImage] = useState(0);
    const {names, image} = films[filmImage];
    

    const previous = () => {
        setfilmImage((filmImage => {
            filmImage --;
            if (filmImage < 0) {
                return films.length-1;
            }
            return filmImage
        }))
    }

    const next = () => {
        setfilmImage((filmImage => {
            filmImage ++;
            if (filmImage > films.length -1) {
                filmImage = 0;
            }
            return filmImage
        }))
    }

    return(
        <div>
        <div className="container">
        <img src={image} width="300px" height="400px" alt="poster"/>
        </div>

        <div className="container">
            <h2>{names}</h2>
        </div>

        <div className="container">
            <button className="btn" onClick={previous}>Назад</button>
            <button className="btn" onClick={next}>Вперед</button>
        </div>
        </div>
    )

}

export default Slide;