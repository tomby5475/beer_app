
import React from "react";
import { useGlobalContext } from "../context";
import { AiOutlineHeart } from 'react-icons/ai';

const Beers = () => {

    const {loading, beers} = useGlobalContext();

    if (loading){
      return <section className='section'>
        <h4>Loading...</h4>
      </section>
    }
    if (beers.length < 1) {
      return <section className='section'>
        <h4>No beers matched your search. Plese try again</h4>
      </section>
    }

    return <section className='section-center'>
      {beers.map((oneBeer) => {
      const {id, name, image_url} = oneBeer
      return <article className="oneBeer" key={id}>
          <img className='img' src={image_url} alt={name} />
          <footer>
            <h5>{name}</h5>
            <button className="like-btn"><AiOutlineHeart /></button>
          </footer>
      </article>  
    })}
    </section>
}

export default Beers;

