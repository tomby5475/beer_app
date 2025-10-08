
import React from "react";
import { useGlobalContext } from "../context";
import { AiOutlineHeart } from 'react-icons/ai';

const Beers = () => {

    const {loading, beers, selectBeer, addFavorites, page, setPage} = useGlobalContext();

    if (loading){
      return (
      <section className='section'>
        <h4>Loading...</h4>
      </section>
      );
    }
    if (!loading && beers.length < 1) {
      return (
      <section className='section'>
        <h4>No beers matched your search. Please try again</h4>
      </section>
      );
    }

    return (
    <section className="section">
      <div className='section-center'>
        {beers.map((oneBeer) => {
          const {id, name} = oneBeer
          return <article className="oneBeer" key={id} >
            <img className='img' src={`https://punkapi.online/v3/images/${String(id).padStart(3, '0')}.png`} alt={name}
            onError={(e) => e.currentTarget.src = "https://placehold.co/150x300?text=No+Image"} 
            onClick={() => selectBeer(id)}/>
            <footer>
              <h5>{name}</h5>
              <button className="like-btn" onClick={() => addFavorites(id)}><AiOutlineHeart /></button>
            </footer>
          </article>  
      })}
      </div>
      <div className="pagination">
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))}>⬅ Prev</button>
        <span>Page {page}</span>
        <button onClick={() => setPage((p) => p + 1)}>Next ➡</button>
      </div>
    </section>
    )
}

export default Beers;

