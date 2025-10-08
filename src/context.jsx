import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AppContext = React.createContext();

const API_BASE = 'https://punkapi.online/v3/beers';
const RANDOM_BEER = `${API_BASE}/random`;

const getFavoritesFromLocalStorage = () => {
  try {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const AppProvider = ({ children }) => {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showBeerInfo, setShowBeerInfo] = useState(false);
  const [selectedBeer, setSelectedBeer] = useState(null);
  const [favorites, setFavorites] = useState(getFavoritesFromLocalStorage());
  const [page, setPage] = useState(1);

  const fetchBeers = async (url) => {
  setLoading(true);
  try {
    const { data } = await axios.get(url);
    if (Array.isArray(data)) {
      setBeers(data);
    } else if (data && typeof data === 'object') {
      // handle random beer
      setBeers([data]);
    } else {
      setBeers([]);
    }
  } catch (e) {
    console.error('Fetch error:', e);
    setBeers([]);
  } finally {
    setLoading(false);
  }
};

  // Fetch beers for current page
  useEffect(() => {
    fetchBeers(`${API_BASE}?page=${page}&per_page=21`);
  }, [page]);

  // Fetch beers by search term
  useEffect(() => {
    if (!searchTerm) return;
    fetchBeers(`${API_BASE}?beer_name=${encodeURIComponent(searchTerm)}&page=1&per_page=21`);
  }, [searchTerm]);

  const fetchRandomBeer = () => fetchBeers(RANDOM_BEER);

  const selectBeer = (id, fromFavorites = false) => {
    const list = fromFavorites ? favorites : beers;
    const beer = list.find((b) => b.id === id);
    setSelectedBeer(beer || null);
    setShowBeerInfo(true);
  };

  const closeBeerInfo = () => setShowBeerInfo(false);

  const addFavorites = (id) => {
    const beer = beers.find((b) => b.id === id);
    if (!beer || favorites.some((b) => b.id === id)) return;
    const updated = [...favorites, beer];
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  const removeFavorites = (id) => {
    const updated = favorites.filter((b) => b.id !== id);
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        beers,
        setSearchTerm,
        fetchRandomBeer,
        showBeerInfo,
        selectBeer,
        selectedBeer,
        closeBeerInfo,
        addFavorites,
        favorites,
        removeFavorites,
        page,
        setPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
export { AppContext, AppProvider };
