import React from 'react'

const MovieCard = ({el}) => {
  return (
    <div className='card'>
        <img src={el.picture} alt="film_img" style={{ width:"260px" , borderRadius: '10% 10% 0 0'}}/>
        <h1> film : {el.name}</h1>
        <h6> Trailer : </h6>
        <h6> {el.urlTailer} </h6>
        <h6> rating : </h6>
        <h6> {el.rating}</h6>
    </div>
  )
}

export default MovieCard;
