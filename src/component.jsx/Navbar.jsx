import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import { logoutUser } from '../features/auth/authSlice';

const Navbar = () => {

    const {user} = useSelector(state => state.auth);
    const dispatch= useDispatch();

    const handlelogout = ()=>{
      dispatch(logoutUser());
    }

  return (
<nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <Link to={"/"}>
    <span className="navbar-brand mb-0 h1">Auth-app</span>
    </Link>
<span>
{
      !user ? (
        <>
        <Link to={"/register"} className="btn btn-success rounded-0 btn-sm">Register</Link>
    <Link to={"/login"} className="btn btn-success rounded-0 btn-sm ms-2">Login</Link></>
      ):(
<button className="btn btn-danger rounded-0 btn-sm ms-2" onClick={handlelogout}>Log Out</button>
      )
    }
</span>
    
  </div>
</nav>
  )
}

export default Navbar;
