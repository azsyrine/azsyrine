import './Login.css'
import React, { useState } from "react";
//import{Box, Typography, TextField, Button} from "@mui/material"
import axios from "axios";
import { NavLink ,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  
  const [passShow, setPassShow] = useState(false);
  const history = useNavigate(); 
  const [ setEmail] = useState("");
  const [inputs, setInputs ] = useState({
  email:"",
  password:""
  }) ;

  const setVal = (e) =>{
    setEmail(e.target.value);
    
    };

  const sendLink=async () =>{
    return  await axios.post ("http://localhost:4000/login",{

      email: inputs.email,
      password: inputs.password,

    }).then((res) => { 
      console.log(res.data);
        history("/Welcom");
    })
    .catch((e)=>toast.error(e.response.data.message));

  };

   
  const handleChange = (e) =>{
    setInputs(prev =>({
        ...prev,
        [e.target.name]: e.target.value 
      }))
    }
  
    return(
  
      <>
      <section>
          <div className="form_data">
              <div className="form_heading">
                  <h1>Welcome Back, Log In</h1>
                  <p>Hi, we are you glad you are back. Please login.</p>
              </div>
              <form>
                  <div className="form_input">
                      <label htmlFor="email">Email</label>
                      <input type="email" value={inputs.email} onChange={handleChange} name="email" id="email" placeholder='Enter Your Email Address' />
                  </div>
                  <div className="form_input">
                      <label htmlFor="password">Password</label>
                      <div className="two">
                          <input type={!passShow ? "password" : "text"} onChange={handleChange} value={inputs.password} name="password" id="password" placeholder='Enter Your password' />
                          <div className="showpass" onClick={() => setPassShow(!passShow)}>
                              {!passShow ? "Show" : "Hide"}
                          </div>
                      </div>
                  </div>
                  <button className='btn' type="button" onSubmit={sendLink}>Login</button>
                <p>Don't have an Account? <NavLink to="/signup"> Sign Up </NavLink> </p>
                <p style={{color:"black",fontWeight:"bold"}}> Forgot Password <NavLink to="/passwordreset">Click Here</NavLink> </p>
            </form>
              
            <ToastContainer />
        </div>
      </section>
    </>

    )
  
  }

export default Login  
