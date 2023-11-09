import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, reset } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const dispatch = useDispatch();
    const navigate = useNavigate();

  const {user, isError, isSuccess, isLoading, message}=useSelector((state)=>state.auth)

    const[formData2, setFormData2] = useState({ email:"", password:""});

    const {  email, password } = formData2;

    const handleChange = (e)=>{
        setFormData2({
            ...formData2,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
            toast.error("User logged in successfully");
          dispatch(loginUser(formData2));
        setFormData2("")
    }

    useEffect(()=>{
      if(user || isSuccess){
        navigate("/")
      }

      if(isError || message){
        toast.error(message);
      }

      dispatch(reset());

    }, [user, isError, isSuccess, isLoading,message]);

    if(isLoading){
      return(
        <h5>Loading...</h5>
      )
    }

  return (
    <>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit}>
        <input className='form-control rounded-0 mt-2' required type='email' placeholder='email' name='email' value={email} onChange={handleChange}/>
        <input className='form-control rounded-0 mt-2' required type='password' placeholder='password' name='password' value={password} onChange={handleChange}/>
        <button type='submit' className='btn btn-success rounded-0 mt-2 w-100'>Save</button>
      </form>
    </>
  )
}

export default Register
