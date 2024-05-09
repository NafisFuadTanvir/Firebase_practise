import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'; 
import { signInWithEmailAndPassword,createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../Firbase/Firebase.config"

export const Authcontext= createContext(null)


const Authprovider = ({children}) => {

    const [user,setUser]= useState(null);
     const [loading,setLoading]= useState(true);

    const createUser=(email,password)=>{
        setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)


    }

    const signinUser=(email,password)=>{
        setLoading(true)

        return signInWithEmailAndPassword(auth,email,password)

    }

    const logout=()=>{
        setLoading(true)
        return signOut(auth);
    }
// observe auth state change
    useEffect(()=>{

      const unSubscribe= onAuthStateChanged(auth,(currentuser)=>{
       console.log("current value of the current user", currentuser)
         setUser(currentuser);
         setLoading(false)

         return ()=>{
            unSubscribe();
         }

      })


    },[])

    const authinfo= {user,createUser,signinUser,logout,loading}
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;

Authprovider.propTypes={
    children: PropTypes.node
}