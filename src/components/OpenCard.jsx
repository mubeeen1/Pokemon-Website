import React, { useState, useEffect } from "react";
import Image from "next/image";
import Abilities from "./Abilities";
import Moves from "./Moves";
import Loader2 from "./Loader2";

const OpenCard = (props) => {
const [isLoading, setIsLoading] = useState(true)
  const [pokemonData, setPokemonData] = useState();

  useEffect(() => {
    const fetchPokemonData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.query}` );
      const data = await response.json();
      console.log("Data Fetched");
      
      setPokemonData(data);
      setIsLoading(false);
    };
    fetchPokemonData();
  }, [props.query]);

  return (
   <>

   {isLoading? <div className="min-h-screen flex items-center justify-center"> <Loader2 /></div>: 
<div className="flex flex-col gap-4 justify-center m-4 font-serif ">
      <div className="relative flex flex-row min-w-[90vw] bg-white/40 rounded-xl border shadow-rose-300 shadow-md  hover:shadow-lg hover:shadow-rose-500">
        <div className="min-w-36 h-36 md:h-[12.5rem] m-2 rounded-xl border shadow-rose-300 shadow-md">
          <div className=" m-2 p-4 bg-pink-500 rounded-xl max-w-full  max-h-[93%] flex items-center justify-center ">
            <Image
              src={pokemonData.sprites.other.dream_world.front_default}
              width={140}
              height={140}
              alt= "pokemon-img"
              priority
            />
          </div>
        </div>
        <div className="m-3 ">
          <h2 className="font-bold text-center uppercase text-2xl md:text-4xl my-4 ">
            {pokemonData.name}
          </h2>
          <h4 className="text-2xl  my-2 ">
           <span className="font-bold">Type:</span> {pokemonData.types[0].type.name}
          </h4>
          <p className=" text-gray/50 text-justify text-xl md:text-2xl">
            <Abilities ability={pokemonData.abilities} variant={"grid grid-cols-2 md:grid-cols-4 gap-4 ml-2"} />
          </p>
        </div>
      </div>
        <div className="">
            <Moves movesData={pokemonData.moves} />
          </div>
    </div>
  }
  </>
  )
}
export default OpenCard;