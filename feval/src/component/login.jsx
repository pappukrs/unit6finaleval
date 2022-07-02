import React from 'react';

const Login=()=>{
   const[email,setEmail]=React.useState('');
   const[password,setPassword]=React.useState('');

    const handleSubmit=(e)=>{
        // e.preventDefault();

        // const payload={
        //     email:email,
        //     password:password,
        // }
        
    }

    return(
        <>
        <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:"10px",marginLeft:"5%",marginRight:"5%",backgroundColor:"teal",padding:"10%"}}>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} ontype="text" placeholder="Enter email" />
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Enter password' />
            <input type='submit' value='login' />
        </form>
        </>
    )
}

export default Login;