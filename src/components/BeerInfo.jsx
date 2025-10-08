import React from "react";
import { useGlobalContext } from "../context";

const BeerInfo = () => {
        const {selectedBeer, closeBeerInfo} = useGlobalContext()
        
        // Prevent crash if no beer selected yet
          if (!selectedBeer) {
                return (
                        <section className="section">
                                <h4>No beer selected</h4>
                        </section>
                );
        }
        const {id, name, tagline, abv: strength, food_pairing} = selectedBeer;
        const safeImage = `https://punkapi.online/v3/images/${String(id).padStart(3, '0')}.png`;
  
    return ( 
        <article className="oneBeer_layout">
                <div className="oneBeer_container">
                        <h1>{name}</h1>
                        <img src={safeImage} alt={name} 
                        onError={(e) => e.currentTarget.src = "https://placehold.co/150x300?text=No+Image"}

                        />
                        <p>Description: {tagline}</p>
                        <p>Strength: {strength}</p>
                        <p>Goes well with: {food_pairing}</p>
                        <button className="btn close_btn" onClick={closeBeerInfo}>Close</button>
                </div>
        </article>
    )
}

export default BeerInfo;

