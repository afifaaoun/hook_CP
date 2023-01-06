import React, {useState} from 'react'

const Addmovie= ({handelAdd}) => {

    let [picturee,setPicture]= useState()
    let [namee,setName]= useState()
    let [descriptionn,setDescriptionn]= useState()
    let [ratingg,setRatingg]= useState()
    let [urlTailerr,seturlTailerr]= useState()

const AddNewwmovie=()=>{
  handelAdd({
              id : Date.now(),
              name : namee,
              description : descriptionn,
              rating : ratingg,
              pic : picturee,
              urlTailer : urlTailerr,
            })
}

  return (
    <div>
        picture         :    <input type='text' onChange={(event)=>setPicture(event.target.value)}/>
        name            :    <input type='text'onChange={(event)=>setName(event.target.value)}/> 
        description     :    <input type='text' onChange={(event)=>setDescriptionn(event.target.value)}/> 
        rating          :    <input type='text' onChange={(event)=>setRatingg(event.target.value)}/> 
        urlTailer       :    <input type='text' onChange={(event)=>seturlTailerr(event.target.value)}/> 

        <button onClick={AddNewwmovie}>
          Add
          </button>
    </div>
  )
}

export default Addmovie;

