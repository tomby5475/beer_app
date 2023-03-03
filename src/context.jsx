import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'

const AppContext = React.createContext()


const allBeers = 'https://api.punkapi.com/v2/beers?page=2&per_page=42'
// const randomBeer = 'https://api.punkapi.com/v2/beers/random'

// const AppProvider = ({children}) => {
//     const [beers, setBeers] = useState([])
//     const [loading, setLoading] = useState(false)

//     const fetchBeers = async(url) => {
//       setLoading(true)
//         try {
//             const {data} = await axios.get(url)
//             setBeers(data.beers)
//             } catch (error) {
//                 console.log(error.response)
//             }
//             setLoading(false)
//         }
//         useEffect(() => {
//             fetchBeers(allBeers)
//     },[])
 
//     return <AppContext.Provider value={{loading, beers}}>
//         {children}
//     </AppContext.Provider>
// }

const AppProvider = ({ children }) => {
  const [beers, setBeers] = useState([])
  const [loading, setLoading] = useState(false)

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

  return <AppContext.Provider value={{loading, beers}}>
  {children}
</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
} 

export {AppContext, AppProvider}



