import { useState } from "react";
import { films } from "./filmsC";


function Comedy() {

    const [comedy, setComedy] = useState(films);
    const [showText, setShowText] = useState(false);
    

    const showTextClick = (thing) => {
        thing.showMore = !thing.showMore
        setShowText(!showText)
    }

    const removeFilms = (id) => {
        
        let newFilms = comedy.filter(comedys => comedys.id !== id);
        setComedy(newFilms)
    }
   





    return(
        <div>
            {comedy.map((thing => {
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

export default Comedy;