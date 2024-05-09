import React, { useContext } from 'react';
import { Authcontext } from '../Provider/Authprovider';
import { NavLink, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types'; 
const Privateroute = ({children}) => {

    const {user,loading}= useContext(Authcontext);

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(user){
        return children;
    }

    return <Navigate to="/login"></Navigate>
    
   
};

export default Privateroute;

Privateroute.propTypes={
    children: PropTypes.node
}