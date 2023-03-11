
import './App.css';
import React from 'react';
import Beers from './components/Beers';
import Search from './components/Search';
// import BeerInfo from './components/BeerInfo';
// import Favorites from './components/Favorites';



function App() {
  return (
    <main>
      <Search/>
      {/* <Favorites/> */}
      {/* <BeerInfo/> */}
      <Beers/>
    </main>
  );
}

export default App;
