import React from "react";
import Card from "./Card";
import pokemons from "../pokemons";

function Store(props) {

return (

<div div className="store">
<h3>Store</h3>
<Card
    name={pokemons[0].name}
    img={pokemons[0].imgURL}
    price={pokemons[0].price}
/>

<Card
    name={pokemons[1].name}
    img={pokemons[1].imgURL}
    price={pokemons[1].price}
/>

<Card
    name={pokemons[2].name}
    img={pokemons[2].imgURL}
    price={pokemons[2].price}
/>
</div>

    );
  }
  
  export default Store;
