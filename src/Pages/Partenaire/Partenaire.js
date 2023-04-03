
import React, {  useState } from "react";
import axios from 'axios';
import { ToastContainer } from 'react-toastify';

import { NavLink , useNavigate} from "react-router-dom";


const Partenaire = () => {
  
  const history = useNavigate();

  const [inputs, setInputs ] = useState({
    name:"",
    email:"",
    adress:"",
    phoneNumber:"",
    password:""
    
  }) ;
  const sendRequest =async () =>{
    const res = await axios.post ("http://localhost:4000/partenaire",{

      name: inputs.name,
      email: inputs.email,
      adress:inputs.adress,
      phoneNumber: inputs.phoneNumber,
      password:inputs.password
     

    }).catch((err) => console.log(err));
    const data = await res.data;
    return data;

  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    // sending request http
    sendRequest().then(() => history("/Welcom")) 
  };

  
  const handleChange = (e) =>{
    setInputs(prev =>({
        ...prev,
        [e.target.name]: e.target.value 
      }))
    };


  return (
    <>
    <section>
        <div className="form_data">
            <div className="form_heading">
                <h1>Prepose Login</h1>
                <p>As a Partenaire  Please login.</p>
            </div>
            <form>
                <div className="form_input">
                    <label htmlFor="name">Name</label>
                    <input type="name" value={inputs.name} onChange={handleChange} name="name" id="name" placeholder='Enter Your Name ' />
                </div>
                <div className="form_input">
                    <label htmlFor="email">Email</label>
                    <input type="email" value={inputs.email} onChange={handleChange} name="email" id="email" placeholder='Enter Your Email ' />
                </div>
                <div className="form_input">
                    <label htmlFor="adress">Adress</label>
                    <input type="adress" value={inputs.adress} onChange={handleChange} name="adress" id="adress" placeholder='Enter Your Adress ' />
                </div>
                <div className="form_input">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type={"phoneNumber"} value={inputs.phoneNumber} onChange={handleChange} name="phoneNumber" id="phoneNumber" placeholder='Enter Your phoneNumber ' />
                </div>
                <div className="form_input">
                   
                    
                </div>
                <button className='btn' type="button" onSubmit={handleSubmit}>Send</button>
                <div className="two">
                  
                        <p style={{color:"black",fontWeight:"bold"}}>Back To Home <NavLink to="/Welcom">Click Here</NavLink> </p>
                    </div>

              <p>Thank's For Login</p>
              <p>Please wait for your code send to your email</p>
          </form>
          <ToastContainer />
      </div>
    </section>
  </>
    
  )
}

export default Partenaire