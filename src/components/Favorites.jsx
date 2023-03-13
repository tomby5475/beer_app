import React from "react";
import { useGlobalContext } from "../context";

const Favorites = () => {
    const {favorites, selectBeer, removeFavorites} = useGlobalContext()
    return (
        <article className="favorites">
            <div className="favorites_container">
                <h5>Favorites</h5>
                {favorites.map((item) => {
                    const {id, image_url: img, name} = item
                    return <div key={id} className="favorites_content">
                        <img src={img} alt={name} />
                        <p>{name}</p>
                        <button onClick={()=> removeFavorites(id)}>remove</button>
                    </div>
                })}
            </div>
        </article>
    )
}

export default Favorites;