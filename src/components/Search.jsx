
import React from "react";
import { useState } from "react";
import { useGlobalContext } from "../context";

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
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="type favorite beer" value={text} onChange={handleChange}/>
            <button type="submit" className="btn">search</button>
            <button type="submit" className="btn" onClick={handleRandomBeer}>random beer</button>
        </form>
    </header>
    )
}

export default Search;