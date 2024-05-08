import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types'; 
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firbase/Firebase.config"

export const Authcontext= createContext(null)


const Authprovider = ({children}) => {

    const [user,setUser]= useState(null);

    const createUser=(email,password)=>{

      return createUserWithEmailAndPassword(auth,email,password)


    }

    const signinUser=(email,password)=>{

        return signInWithEmailAndPassword(auth,email,password)

    }



    const authinfo= {user,createUser,signinUser}
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