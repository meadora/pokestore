import React from "react";
import Item from "./Item";
import pokemons from "../pokemons";

function Cart(props) {
    return (
      <div div className="cart">
      <h3>Cart</h3>
        <Item
            name={pokemons[0].name}
            img={pokemons[0].imgURL}
            price={pokemons[0].price}
        />

        <Item
            name={pokemons[1].name}
            img={pokemons[1].imgURL}
            price={pokemons[1].price}
        />

        <Item
            name={pokemons[2].name}
            img={pokemons[2].imgURL}
            price={pokemons[2].price}
        />
      </div>
    );
  }
  
  export default Cart;