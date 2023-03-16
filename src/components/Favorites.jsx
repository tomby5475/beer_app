import React from "react";
import { useGlobalContext } from "../context";

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
                        <img src={img} alt={name} onClick= {() => selectBeer(id, true)}/>
                        <p>{(name.length < 20) ? name : name.slice(0,20) + '...'}</p>
                        <button className="remove_btn" onClick={()=> removeFavorites(id)}>remove</button>
                    </div>
                })}
                </div>
            </div>
        </article>
    )
}

export default Favorites;
