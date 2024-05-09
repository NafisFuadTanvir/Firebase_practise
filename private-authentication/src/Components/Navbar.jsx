import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Authcontext } from '../Provider/Authprovider';

const Navbar = () => {
 

  const {user,logout}= useContext(Authcontext);

  const handleLogout=()=>{

    logout()
    .then(()=>console.log("logged out successfull"))
    .catch((error)=>console.error(error))

  }

    const links= <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/login">Log in</NavLink></li>
    <li><NavLink to="/signin">Sign in</NavLink></li>
    <li><NavLink to="/orders">Orders</NavLink></li>
    { user && 
   <> <li><NavLink to="/profile">profile</NavLink></li>
    <li><NavLink to="/dashboard">Dashboard</NavLink></li>
    </>
    }

    
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><Link to="/">Private Auth</Link></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>

  <div className="navbar-end">
    {
      user && <span>{user.email}</span>
    }
    <a onClick={handleLogout} className="btn btn-sm">Sign out</a>
  </div>
  
</div>
    );
};

export default Navbar;