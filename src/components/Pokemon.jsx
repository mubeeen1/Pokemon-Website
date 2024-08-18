"use client"
import React, {useEffect , useState} from 'react'
import ClosedCard from './ClosedCard'
import Loader from './Loader'
const Pokemon = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const fetchPokemonData = async () => {
      if (fetching) return; // prevent multiple fetches
      setFetching(true);
    
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=99");
        const pokemonList = await response.json();
    
        const promises = pokemonList.results.map((pokemon) => fetch(pokemon.url).then((response) => response.json()));
        const results = await Promise.all(promises);
    
        setPokemonData(results);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      } finally {
        setFetching(false);
        setIsLoading(false)
      }
    };
    fetchPokemonData();
  }, [fetching]);
    return (
      <div>
        {isLoading ? ( <div className="h-screen"> <Loader /></div> ) : (
          <div className="w-screen min-h-dvh">
            <h3 className="text-center mt-5 font-bold text-xl md:text-4xl font-serif ">
                Here are the Pokemons
            </h3>
            <div className="flex justify-center sm:justify-evenly ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 ">
                
             {
                pokemonData.map((pokemon)=>{
                    return <ClosedCard key={pokemon.id} pokemon={pokemon}/>
                })
               }
                  </div>
          
              </div>
          </div>
        )}
      </div>
        
    )
}

export default Pokemon