import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()


const allBeers = 'https://api.punkapi.com/v2/beers?'
// const randomBeer = 'https://api.punkapi.com/v2/beers/random'

const AppProvider = ({ children }) => {
  const [beers, setBeers] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(()=>{
    setLoading(true)

    fetch(allBeers)
    .then((response) => response.json())
    .then((beers) => {
      setBeers(beers)
      if(beers) {
        setBeers(beers)
      }
      else {
        setBeers([])
      }
      setLoading(false)
    })
    .catch((error) => {
      console.log(error.response)
    })
  },[])

  useEffect(() => {
    fetch({allBeers}, {searchTerm}) 
  }, [searchTerm])

  return <AppContext.Provider value={{loading, beers, setSearchTerm}}>
  {children}
</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
} 

export {AppContext, AppProvider}



