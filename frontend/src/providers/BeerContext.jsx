import React from "react";
import { createContext, useEffect, useState } from "react";
import { api } from "../services/punkApi";

export const BeerContext = createContext({});

export const BeerProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [beerList, setBeerList] = useState([]);
  const [currentBeer, setCurrentBeer ] = useState({});
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const loadBeerData = async () => {
      try {
        setIsLoading(true);
        const beers = await api.get("beers");
        setBeerList(beers.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    loadBeerData();
  }, []);

  return (
    <BeerContext.Provider value={{ beerList, isLoading, setIsOpen, setCurrentBeer, isOpen, currentBeer }}>
      {children}
    </BeerContext.Provider>
  );
};
