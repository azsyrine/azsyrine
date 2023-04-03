import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from "axios";


const ForgetPassword = () => {

    const { id, token } = useParams();
    const history = useNavigate();
    const [password, setPassword] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");
    const [inputs, setInputs ] = useState({
        password:"",
        newpassword: ""
        }) ;

    const setval = (e) => {
        setPassword(e.target.value)
        setNewPassword(e.target.value)
    }
    const forgetPassword = async () => {


        const res = await axios.get(`http://localhost:4000/api/forgetpassword/${id}/${token}`, {
            password: inputs.password,
            newpassword: inputs.newpassword

        }).then((res) => {
            console.log(res);
            toast.success(res.data.message);
        })
            .catch((err) => toast.error(err.response.data.message));




        const data = await res.json()

        if (data.status === 201) {
            console.log("user valid")
        } else {
            history("*")
        }


        if (password === "") {
            toast.error("password is required!", {
                position: "top-center"
            });
        } else if (password.length < 6) {
            toast.error("password must be 6 char!", {
                position: "top-center"
            });
        } else {
            const res = await axios.post(`http://localhost:4000/api/changepassword/${id}/${token}`, {

            });

            const data = await res.json()

            if (data.status === 201) {
                setPassword("")
                setNewPassword("")
                setMessage(true)
            } else {
                toast.error("! Token Expired generate new LInk", {
                    position: "top-center"
                })
            }
            
        }


    }




    return (


        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Enter Your NEW Password</h1>
                    </div>

                    <form>
                        {message ? <p style={{ color: "green", fontWeight: "bold" }}>Password Succesfulyy Update </p> : ""}
                        <div className="form_input">
                            <label htmlFor="password">New password</label>
                            <input type="password" value={password} onChange={setval} name="password" id="password" placeholder='Enter your new password' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="newpassword">Verify your password</label>
                            <input type="newpassword" value={newpassword} onChange={setval} name="newpassword" id="newpassword" placeholder='Verify  your new password' />
                        </div>

                        <button className='btn' type="button" onClick={forgetPassword}>Send</button>
                    </form>

                </div>
            </section>
        </>
    );
};

export default ForgetPassword;