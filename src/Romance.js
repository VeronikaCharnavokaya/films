import { useState } from "react";
import { filmsR } from "./filmsR";


function Romance() {

    const [romance, setRomance] = useState(filmsR);
    const [showText, setShowText] = useState(false);
    

    const showTextClick = (thing) => {
        thing.showMore = !thing.showMore
        setShowText(!showText)
    }

    const removeFilms = (id) => {
        
        let newFilms = romance.filter(romances => romances.id !== id);
        setRomance(newFilms)
    }
   



    return(
        <div>
            {romance.map((thing => {
                const {id, names, description, showMore, image} = thing;
                return(
                    <div key={id}>
                        <div className="container">
                        <h2>{names}</h2>
                        </div>
                        <div className="container">
                        <img src={image} width='200px' alt="pictures"/>
                        </div>
                        
                        <div className="container">
                            <p>{showMore ? description : description.substring(0,100)+"..."}
                            <button className="btnshow" onClick={() => showTextClick(thing)}>{showMore ? "Показать меньше" : "Показать больше"}</button>
                            </p>
                        </div>
                        <div className="container">
                            <button className="btnremove" onClick={() => removeFilms(id)}>Посмотрено</button>
                        </div>
                        </div>
                        
                    
                )
            }))}
        </div>
    )
}

export default Romance;