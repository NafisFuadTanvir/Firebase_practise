import React, { createContext } from 'react';
import PropTypes from 'prop-types'; 

export const Authcontext= createContext(null)
const Authprovider = ({children}) => {

    const authinfo= {name:"Nafis Fuad Tanvir"}
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;

Authprovider.PropTypes={
    children: PropTypes.node
}