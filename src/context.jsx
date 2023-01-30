import React, { useState, useContext, useEffect, } from 'react'
import axios from 'axios'

const AppContext = React.createContext()

const allBeers = 'https://api.punkapi.com/v2/beers'
const randomBeer = 'https://api.punkapi.com/v2/beers/random'

const AppProvider = ({children}) => {
    const [beers, setBeers] = useState([])

    const fetchBeers = async(url) => {
        try {
            const {data} = await axios.get(url)
            setBeers(data.beers)
            } catch (error) {
                console.log(error.response)
            }
        }
        useEffect(() => {
            fetchBeers(allBeers)
    },[])
 
    return <AppContext.Provider value={{beers}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
} 

export {AppContext, AppProvider}