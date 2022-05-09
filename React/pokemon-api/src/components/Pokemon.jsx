import React, {useState} from 'react';


const Pokemon = ()=>{
    let [pokemonList, setPokemonList] = useState([])


    const getPokemon = ()=> {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0")
            .then(response => {
                return response.json();
            })
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



export default Pokemon;