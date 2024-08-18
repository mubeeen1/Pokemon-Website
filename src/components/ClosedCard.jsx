import React from "react";
import Abilities from "./Abilities";
import Image from "next/image";
import { FaArrowRightToBracket } from "react-icons/fa6";
import Link from "next/link";
const ClosedCard = ({ pokemon }) => {
    return (
        <div
            className={
                "flex flex-col relative min-h-[100px] w-[250px] mx-5 my-8 border shadow-md shadow-rose-400 p-2 rounded-lg bg-white/40"
            }
        >
            <div className="absolute top-1 left-1 text-center p-1 rounded-full border bg-white w-8 h-8 font-bold text-black">
            {pokemon.id}
            </div>

            <div className="bg-pink-400 rounded-md p-2  ">
                <Image
                    src={pokemon.sprites.other.dream_world.front_default}
                    width={300}
                    height={300}
                    alt="pokemon-img"
                    className="mx-auto mt-8 mb-8"
                />
            </div>
            <div>
                <h2 className="text-center font-bold text-xl font-serif uppercase">
                    {pokemon.name}
                </h2>

             
                    <Abilities ability={pokemon.abilities} />
               
            </div>
            <Link href={`/pokemons/${pokemon.name}`} shallow passHref>
                <button className="absolute mx-2 my-4 bottom-0 right-0 text-3xl hover:text-green-400">
                    <FaArrowRightToBracket />
                </button>
            </Link>
        </div>
    );
};
export default ClosedCard;
