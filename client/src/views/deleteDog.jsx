import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteDog } from '../redux/actions';
import { Link } from "react-router-dom";

export const DeleteDog = () => {
const dispatch = useDispatch();
const [deleteDogName, setDeleteDogName] = useState('') 

const handleChange=(event)=>{
setDeleteDogName(event.target.value)
}

const handleSubmit=(event)=>{
event.preventDefault();
dispatch(deleteDog(deleteDogName))
}
  return (
    <div>deleteDog
        <input type="text" value={deleteDogName} onChange={handleChange}/>
        <button onClick={handleSubmit}>Delete Dog</button>

        <Link to={'/home'}>
        <button>home</button>
        </Link>
    </div>
  )
}
