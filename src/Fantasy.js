import { useState } from "react";
import { filmsF } from "./filmsF";


function Fantasy() {

    const [fantasy, setFantasy] = useState(filmsF);
    const [showText, setShowText] = useState(false);
    

    const showTextClick = (thing) => {
        thing.showMore = !thing.showMore
        setShowText(!showText)
    }

    const removeFilms = (id) => {
        
        let newFilms = fantasy.filter(fantasys => fantasys.id !== id);
        setFantasy(newFilms)
    }
   

    



    return(<div>
        
        <div>
            {fantasy.map((thing => {
                const {id, names, description, showMore, image} = thing;
                return(
                    <div key={id}>
                        <div>
                        <h2 className="container">{names}</h2>
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
    </div>)
    } 
        
        
export default Fantasy;