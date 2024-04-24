import React, { useState } from 'react';
import { getAuth,GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firbase/firebase.init';

const Login = () => {
     const [loginuser,Setloginuser]= useState({});     
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    console.log(app)

    const handleGoogle=()=>{
        signInWithPopup(auth,provider)
        .then((result)=>{

            const user= result.user;
            console.log(user)
            Setloginuser(user)
        })
        .catch((error)=>{

            console.log("error",error.message)
        })

        


    }
    const handleSignout=()=>{
    signOut(auth)
    .then(()=>{
        console.log("signout successfully")
        Setloginuser(null);
    })
    .catch((error)=>{

        console.log(error.message)
    })
            
    }
    return (
        <div>
     
            
        
                <button onClick={handleGoogle}>Google Login</button>:  <button onClick={handleSignout}>Signout</button>

        
            
           
          
 
            {
                loginuser?<div><h2>Name:{loginuser.
                    displayName
                    }</h2></div>:<div></div>
                
            }   

        </div>
    );
};

export default Login;