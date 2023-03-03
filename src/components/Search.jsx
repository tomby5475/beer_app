
import React from "react";
import { useState } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
    return ( <header>
        <form>
            <input type="text" placeholder="type favorite beer"/>
            <button type="submit" className="btn">search</button>
            <button type="submit" className="btn">random beer</button>
        </form>
    </header>
        
    )
}

export default Search;