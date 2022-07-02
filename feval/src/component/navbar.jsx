import React from 'react';
import styled from 'styled-components';

import {Link} from 'react-router-dom'

const NavbarWrapper=styled.div`
     display:flex;
     flex-direction:row;
     justify-content:space-around;
     margin-left:6%;
     margin-right:6%;
     margin-top:5%;
     padding:10px;
`

const Navbar=()=>{

    return(
        <NavbarWrapper>
            <div> <Link to='/login'>Login</Link></div> 
            <div><Link to='/'>Home</Link></div>
            <div><Link to='/booking'>Booking</Link></div>
        </NavbarWrapper>
    )
}

export default Navbar;