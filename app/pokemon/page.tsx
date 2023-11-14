"use client";

import SinglePokemon from "@/components/Pokemon/SinglePokemon";
import Navigation from "@/components/Pokemon/Navigation";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Pokemon = () => {

  const [pokeInfo, setPokeInfo] = useState([]);
  const [nextPage, setNextPage] = useState();
  const [previosPage, setPreviousPage] = useState()

  useEffect(() => {
    const getData = async () => {
      const query = await fetch('api/pokemon');
      const response = await query.json();
      setPokeInfo(response);
      setNextPage(response.next);
      setPreviousPage(response.previous)
    }
    getData();
  },[]);

  // console.log(pokeInfo)
  // console.log(nextPage)
  // console.log(previosPage)
  
  return (
    <>
      <Breadcrumb
        pageName="Blog Grid"
        description=""
      />      
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {pokeInfo.results && 
              
              pokeInfo.results.map( (pokemon) => (   
                <div
                  key={uuidv4()}
                  className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mt-1.5"
                >               
                  <SinglePokemon key={uuidv4()} pokemon={pokemon}  />                                  
                </div>
                ))
            }            
          </div>
          <div
            className="wow fadeInUp -mx-4 flex flex-wrap"
            data-wow-delay=".15s"
          >
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <Navigation prev={previosPage} next={nextPage} />
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pokemon;
