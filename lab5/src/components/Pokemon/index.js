import React from 'react';

function Pokemon(props){
   return (<div>
      <p>{props.pokemon.name}</p>
      <p>{props.pokemon.id}</p>
      <img src={props.pokemon.sprites.front_default} />
      </div>);
   
}
export default Pokemon;