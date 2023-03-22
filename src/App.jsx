
import './App.css';
import React from 'react';
import Beers from './components/Beers';
import Search from './components/Search';
import BeerInfo from './components/BeerInfo';
import { useGlobalContext } from './context';
import Favorites from './components/Favorites';



function App() {

  const {showBeerInfo, favorites} = useGlobalContext()

  return (
    <main>
      {showBeerInfo || <Search/>}
      {favorites.length > 0 && <Favorites/>}
      <Beers/>
      {showBeerInfo && <BeerInfo/>}
    </main>
  );
}

export default App;
