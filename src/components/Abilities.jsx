import React from 'react';

const Abilities = ({ability, variant}) => {
  return (
    <>
    <ul className={variant}>

    <span className="text-black text-lg font-semibold">Abilities:</span>
      {ability.map((abilities, index) => (
        <li className="list-disc text-lg ml-6 " key={index}>
          {abilities.ability.name}
        </li>
      ))}
    </ul>
    </>
  );
};

export default Abilities;