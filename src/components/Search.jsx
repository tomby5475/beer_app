
import React from "react";
import { useState } from "react";
import { useGlobalContext } from "../context";
import BeerIcon from "../BeerIcon.png"

const Search = () => {
    const {setSearchTerm, fetchRandomBeer} = useGlobalContext()
    const [text, setText] = useState('')
    
    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text) {
            setSearchTerm(text)
        }
    }
    
    const handleRandomBeer = () => {
        setSearchTerm('')
        setText('')
        fetchRandomBeer()
    }

    return ( <header className="search-block">
        <a href="/"><img src={BeerIcon} alt="Beer!"  className="beerIcon"/></a>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search your beer" value={text} onChange={handleChange}/>
            <button type="submit" className="btn search_btn">Search</button>
            <button type="submit" className="btn random_btn" onClick={handleRandomBeer}>Random beer</button>
        </form>
    </header>
    )
}

export default Search;