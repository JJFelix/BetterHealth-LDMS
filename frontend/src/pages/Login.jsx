import { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import ReactLoading from 'react-loading';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setToken, setUserType } from "../slices/auth";

const Login = () =>{
    const [isLoading, setIsLoading] = useState(false)
    const navigate  = useNavigate()
    const dispatch = useDispatch()

    const baseurl = "http://127.0.0.1:8081/api/v1/auth/authenticate"

    const onSubmit = () => {
        setIsLoading(true)
        axios.post(baseurl, values).then((resp)=>{
            console.log(resp)
            setIsLoading(false)
            dispatch(setToken(resp.data.accessToken))
            dispatch(setUserType(resp.data.userType))
            if(resp.data.userType == "DOCTOR"){
                navigate("/doctor")
            }else{
                navigate("/patient")
            }
            
        }).catch((err)=>{
            setIsLoading(false)
            console.error(err)
        })
    }

    const {values, handleChange, handleSubmit} = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit
    })

    return(
        <div className="container">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            <div className="row justify-content-center">
                <div className="col-lg-5 form-section">
                    <form className="form">
                        <h3>Login</h3>
                        <div className="row gy-3">
                            <div className="col-md-12">
                                <input
                                    type="email"
                                    className="form-control"
                                    name = "email"
                                    placeholder="Email"
                                    value={values.email}
                                    onChange={handleChange}
                                    requred
                                />
                                <div class="col-md-12">
                                    <input 
                                        type="password" 
                                        name="password" 
                                        className="form-control" 
                                        placeholder="Password"
                                        value={values.password}
                                        onChange={handleChange}
                                        required/>
                                </div>
                                <div className="col-md-12 text-center">
                                    <button type="submit" onClick={handleSubmit}>{isLoading ? <ReactLoading type='spin' color='#3f4d67' height={22} width={22}/>:'Login'}</button>
                                </div>

                            </div>
                        </div>
                    </form>
                </div> 

            </div>
            
        </div>
    )

}

export default Login;