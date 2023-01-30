
import React from "react";
import { useGlobalContext } from "../context";

const Beers = () => {

    const {beers} = useGlobalContext()

    return <section>
    {beers.map((oneBeer) => {
      console.log(oneBeer)
      return <h4>single beer</h4>
        
    })}
  </section>
}

export default Beers;