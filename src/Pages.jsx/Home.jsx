import React, { useEffect } from 'react'
import {useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';

const Home = () => {

    
    const {user, isLoading,  isError, isSuccess,  message} = useSelector(state=>state.auth);
    const navigate = useNavigate();

    useEffect(()=>{
        if(!user || isError){
            navigate("/register");
        }
    }, [user, isLoading, isError, isSuccess, message]);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default Home;