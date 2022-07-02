import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from '../home'
import Login from '../login'
import Booking from '../booking'


 const Rout=()=>{


    return(
        <>
        <Routes>
              < Route path="/" element={<Home/>}></Route>
              < Route path="/login" element={<Login/>}></Route>
              < Route path="/booking" element={<Booking/>}></Route>

        </Routes>
        </>
    )
 }

 export default Rout;