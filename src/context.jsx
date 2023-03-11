import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'

const AppContext = React.createContext()

const allBeers = 'https://api.punkapi.com/v2/beers?*'
const randomBeer = 'https://api.punkapi.com/v2/beers/random'

const AppProvider = ({ children }) => {
  const [beers, setBeers] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const fetchBeers = async (url) => {
    setLoading(true)

    try {
      const {data} = await axios.get(url)
      if(data) {
        setBeers(data)
      }
      else {
        setBeers([])
      }
    }
    catch (e) {
      console.log(e.response)
    }
      setLoading(false)
  }
   
  const fetchRandomBeer = () => {
    fetchBeers(randomBeer)
  }

  useEffect(() => {
    fetchBeers(allBeers)
  }, [])

  useEffect(() => {
    if(!searchTerm) return
    fetchBeers(`${allBeers} ${searchTerm}`) 
  }, [searchTerm])

  return <AppContext.Provider value={{loading, beers, setSearchTerm, fetchRandomBeer}}>
  {children}
</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
} 

export {AppContext, AppProvider}



