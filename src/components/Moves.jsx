"use client";
import React, { useState } from "react";

const Moves = ({ movesData }) => {
  const [isClicked, setIsClicked] = useState(false);
  const clickeHandler = () => {
    setIsClicked(!isClicked);
  };
  const slicedMoves= movesData.slice(0, 20);
  return (
    <>
    
      <div className="relative min-w-[90vw] min-h-fit  p-3 text-black bg-white/50 rounded-xl border shadow-rose-400 shadow-md">
        <span className="font-bold text-xl md:text-3xl"> Moves:</span>
        {!isClicked?  <ul className="uppercase grid grid-cols-2 md:grid-cols-6 gap-4">
        {
          slicedMoves.map((moves, index) => {
            return <li className="text-xl ml-4 md:text-lg list-disc" key={index}>{moves.move.name}</li>;
          })
        }       
        </ul> : <ul className="uppercase grid grid-cols-2 md:grid-cols-6 gap-4">      
          {movesData.map((moves, index) => {
            return <li className="text-xl ml-4 md:text-lg list-disc" key={index}>{moves.move.name}</li>;
          })}
        </ul>}
      <div className="text-right min-w-10 m-4">
        <button className="text-bold text-xl bg-pink-400 border-2 py-2 px-2 border-rose-600 hover:bg-pink-500 rounded-xl " onClick={clickeHandler}>
         {!isClicked? "Show More" : "Hide" }
        </button>
      </div>
      </div>
    </>
  );
};

export default Moves;
