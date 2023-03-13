import React from "react";
import { useGlobalContext } from "../context";

const BeerInfo = () => {
        const {selectedBeer, closeBeerInfo} = useGlobalContext()
        const {name, image_url: image, tagline, abv: strength, food_pairing} = selectedBeer
        
    return ( <article className="oneBeer_layout">
                <div className="oneBeer_container">
                        <h1>{name}</h1>
                        <img src={image} alt={name}/>
                        <p>Description: {tagline}</p>
                        <p>Strength: {strength}</p>
                        <p>Goes well with: {food_pairing}</p>
                        <button className="btn" onClick={closeBeerInfo}>close</button>
                </div>
        </article>
    )
}

export default BeerInfo;

