
import React from "react";
import { useGlobalContext } from "../context";

const Beers = () => {

    const {loading, beers} = useGlobalContext()

    if (loading){
      return <section className='section'>
      <h4>Loading...</h4>
      </section>
    }

    return <section>
      {beers.map((oneBeer) => {
      console.log(oneBeer)
      return <h4>single beer</h4>
        
    })}
    </section>
}

export default Beers;

