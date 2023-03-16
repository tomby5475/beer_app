import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'

const AppContext = React.createContext()

const allBeers = 'https://api.punkapi.com/v2/beers?'
const randomBeer = 'https://api.punkapi.com/v2/beers/random'

const getFavoritesFromLocalStorage = () => {
  let favorites = localStorage.getItem('favorites')
  if (favorites) {
    favorites = JSON.parse(localStorage.getItem('vavorites'))
  }
  else {
    favorites = []
  } 
  return favorites 
}

const AppProvider = ({ children }) => {
  const [beers, setBeers] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [showBeerInfo, setShowBeerInfo] = useState(false)
  const [selectedBeer, setSelectedBeer] = useState(null)
  const [favorites, setFavorites] = useState(getFavoritesFromLocalStorage())

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
   
  useEffect(() => {
    fetchBeers(allBeers)
  }, [])

  useEffect(() => {
    if(!searchTerm) return
    fetchBeers(allBeers + 'beer_name=' + searchTerm) 
  }, [searchTerm])

  const fetchRandomBeer = () => {
    fetchBeers(randomBeer)
  }

  const selectBeer = (id, favoriteBeer) => {
    let beer; 
    if (favoriteBeer) {
      beer = favorites.find((beer)=>beer.id === id)
    } else {
      beer = beers.find((beer)=>beer.id === id)
    }
    setSelectedBeer(beer)
    setShowBeerInfo(true) 
  }

  const closeBeerInfo = () => {
    setShowBeerInfo(false)
  }

  const addFavorites = (id)=> {
    const beer = beers.find((beer) => beer.id === id)
    const alreadyFavorites = favorites.find((beer) => beer.id === id)
    if(alreadyFavorites) return
    const updatedFavorites = [...favorites, beer]
    setFavorites(updatedFavorites)
    localStorage.setItem('faovorites',JSON.stringify(updatedFavorites))
  }

  const removeFavorites = (id) => {
    const updatedFavorites = favorites.filter((beer)=> beer.id !== id)
    setFavorites(updatedFavorites)
    localStorage.setItem('faovorites',JSON.stringify(updatedFavorites))
  }

  return <AppContext.Provider value={{loading, beers, setSearchTerm, fetchRandomBeer, showBeerInfo, selectBeer, selectedBeer, closeBeerInfo, addFavorites, favorites, removeFavorites}}>
  {children}
</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
} 

export {AppContext, AppProvider}



