import React, { useState } from "react";
import{Box, Typography, TextField, Button} from "@mui/material"
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import regex from "regex-parser";

const Signup = () => {
  //const isLoggedIn ? 
  const history = useNavigate();

   //const phoneNumberRegex = /[0-9]/ ;
      
  const [inputs, setInputs ] = useState({
  name:"", 
  adress:"",
  phoneNumber:"",
  email:"",
  password:"",
  }) ;

      /*  const phoneNumber = "(+216) 12345678";
        if (phoneNumberRegex.test(phoneNumber)) {
          console.log("Valid phone number");
        } else {
          console.log("Invalid phone number");
        };*/
  

  const sendRequest=async () =>{
    
    const res = await axios.post ("http://localhost:4000/api/signup",{
      name:inputs.name,
      adress: inputs.adress,
      phoneNumber: inputs.phoneNumber,
      email: inputs.email,
      password: inputs.password,

    }).catch((err) => console.log(err));
    const data = await res.data;
    return data;
    

  }

  const handleSubmit =  (e) => {
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


return(
  <div>
    <form className="form"  onSubmit={handleSubmit}>
      <Box
        marginLeft="60%"
        marginRight="auto"
        marginTop="70px"
        width={300}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
    
        <Typography  variant="h5" > Create your account </Typography>

        
            
          <TextField name="name" onChange={handleChange}  value={inputs.name} variant="outlined" placeholder="Name" margin="normal"/>
          <TextField name="adress" onChange={handleChange} value={inputs.adress}variant="outlined" placeholder="Adress" margin="normal"/>
          <TextField name="phoneNumber" onChange={handleChange} value={inputs.phoneNumber}variant="outlined" placeholder="PhoneNumber" margin="normal"/>
          <TextField name="email" onChange={handleChange} type={"email"} value={inputs.email}variant="outlined" placeholder="Email" margin="normal"/>
            <TextField name="password" onChange={handleChange} type={"password"} value={inputs.password}variant="outlined" placeholder="Password" margin="normal"/>
                  <Button variant="contained" type="Submit">
                    Sign up
                  </Button>
          </Box>
  
        </form>
        </div>
    )
  
  }
export default Signup