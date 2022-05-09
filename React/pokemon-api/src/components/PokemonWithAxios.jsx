import React, {useState} from 'react';
import axios from 'axios';


const PokemonWithAxios = ()=>{
    let [pokemonList, setPokemonList] = useState([])


    const getPokemon = ()=> {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0")
            .then(response => {
                console.log("got the response --->", response)
                setPokemonList(response.results);
            })
            .catch(err=>{
                console.log("something went wrong", err);
            });
        console.log("doing other stuff while waiting for the api results to come back");
    }

    return (
        <div>
            <button onClick={getPokemon}>Fetch Pokemon</button>
            {
                pokemonList.map((pokemon, idx)=> {
                    return(
                        <div>
                            <h3>{pokemon.name}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}



export default PokemonWithAxios;