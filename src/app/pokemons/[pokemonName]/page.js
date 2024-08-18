"use client"
import OpenCard from "../../../components/OpenCard";

const PokemonPage = ({params}) => {

  return (
    <div>
      <OpenCard query={params.pokemonName} />
    </div>
  );
};


export default PokemonPage;