import React from 'react';
import {useEffect,useState} from 'react';

const Home=()=>{
  const [movi,setMovi]=useState([]);
  
  useEffect(()=>{
    
    fetch(`http://localhost/8080/movies`)
    .then((response)=>{response.json()})
    .then((response)=>{console.log(response)})
    .catch((error)=>{console.log(error)})

  })


  return(
    <>
    <h1>Home</h1>
    </>
  )
}

export default Home;