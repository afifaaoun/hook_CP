import React, { useState, useEffect } from "react";
import Addmovie from './AddMovie';
import movies from "./data"
import MovieCard from "./MovieCard";

const MovieList = () => {

  let [movie,setmovie]= useState(movies)
  let [show,setShow]= useState(false)

  const [search,setSearch]=useState()

  const handelAdd = (newmovie)=>{
    setmovie([...movie,newmovie])
  }

  useEffect(()=>{
        // traja3 l tableau ll etat initial
    setmovie(movies)
  },[search])


  const handelSearch = ()=> {

    let res = movies.filter(el => el.name === search || el.rating === search); 
    setmovie(res)
    if(search === "" || search === undefined){
      // traja3 l tableau ll etat initial
      setmovie(movies)
    }
  }

  const handelShow =()=>{
    setShow(!show)
  }
  return (
    <div>
      search : <input type='search' onChange={event=> setSearch(event.target.value)}/>
      <button onClick={handelSearch}>
        search
      </button>
      {/* button pour le hide et show */}
      <button onClick={handelShow}>{show ? 'hide' : 'show'} </button>
      {show ? <Addmovie handelAdd={handelAdd}/>: null}
        {movie.map(el => <MovieCard element ={el}/>)}
    </div>
  )
}

export default MovieList
