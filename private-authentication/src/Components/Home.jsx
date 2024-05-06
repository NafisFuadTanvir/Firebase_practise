import React, { useContext } from 'react';
import { Authcontext } from '../Provider/Authprovider';

const Home = () => {

    const authinfo= useContext(Authcontext)
    return (
        <div>
            <p>{authinfo.name}</p>
        </div>
    );
};

export default Home;