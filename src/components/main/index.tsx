import { Container } from "./style";
import React, { useState, useEffect, SVGProps } from 'react';
import { api } from "../../service/api";
import Search from "../search";


type PokemonType = {
    name: string,
    url: string,
}


type PokemonListType = {
    count: number,
    next: string | null,
    previous: string | null,
    results: Array<PokemonType>
}

export default function Main(){

    const [listPokemons, setListPokemons] = useState<PokemonListType>()


    useEffect(() => {
            api.get('/pokemon/').then((res: any) => {
                const pokemons: PokemonListType = res.data

                api.get('/pokemon?offset=0&limit=${pokemons.count}').then((_res: any) => {
                  setListPokemons(_res.data)
                  console.log(_res.data)
                 }) 
            })

            
           

    }, [])

    return(
        <Container>
            <Search />
            <div className="container-pokemon">
                <div>
                    {
                    listPokemons?.results.map(
                        (pokemon: PokemonType, index: number) =>  (
                            <>
                                <p key={index}>{ pokemon.name }</p>
                                <img className="img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index +1}.svg`}/>
                            </>
                            
                        )
                    )  
                    }
                </div>
            </div>

        </Container>
    )
}