import React from "react";
import { useGlobalContext } from "../context";
import {AiFillCloseCircle} from "react-icons/ai"


const Favorites = () => {
    const {favorites, selectBeer, removeFavorites} = useGlobalContext()
    
    return (
     <article className="favorites">
            <div className="favorites_content">
                <h5>Favorites</h5>
                <div className="favorites_container">
                {favorites.map((item) => {
                    const {id, image_url: img, name} = item
                    return <div key={id} className="favorites_card">
                            <div className="fav_singleBeer">
                                <img src={img} alt={name} onClick= {() => selectBeer(id, true)}/>
                                <p>{(name.length < 15) ? name : name.slice(0,20) + '...'}</p>
                            </div>
                            <button className="remove_btn" onClick={()=> removeFavorites(id)}><AiFillCloseCircle/></button>
                            </div>
                })}
                </div>
            </div>
        </article>
    )
}

export default Favorites;
