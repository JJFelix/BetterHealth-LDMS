import axios from "axios";
import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import ReactLoading from 'react-loading'

const CreatePatientProfile = () => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate  = useNavigate()
    const accessToken = useSelector((state)=>state.auth.accessToken)

    const baseurl = "http://127.0.0.1:8081/api/v1/patient/add"

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
    }

    const onSubmit = () => {
        setIsLoading(true)
        axios.post(baseurl, values, config).then((resp)=>{
            console.log(resp.data)
            setIsLoading(false)
            navigate("/")
        }).catch((err)=>{
            setIsLoading(false)
            console.error(err)
        })
    }

    const {values, handleChange, handleSubmit} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            gender: ''
        },
        onSubmit
    })
    return(
            <div className="row justify-content-center">
                <div className="col-lg-6 form-section">
                    <form className="form">
                        <h3>Create Profile</h3>
                        <div className="row justify-content-around">
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name = "firstName"
                                        placeholder="First Name"
                                        value={values.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div class="col-md-6">
                                    <input 
                                        type="text" 
                                        name="lastName" 
                                        className="form-control" 
                                        placeholder="Last Name"
                                        value={values.lastName}
                                        onChange={handleChange}
                                        required/>
                                </div>
                                <div class="col-md-6">
                                    <input 
                                        type="text" 
                                        name="dateOfBirth" 
                                        className="form-control" 
                                        placeholder="Date Of Birth"
                                        value={values.dateOfBirth}
                                        onChange={handleChange}
                                        required/>
                                </div>
                                <div className="col-md-6">
                                    <select 
                                        className="form-select" 
                                        aria-label="Default select example"
                                        name="gender"
                                        value={values.gender}
                                        onChange={handleChange}
                                        >
                                        <option selected>Gender</option>
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                        
                                    </select>
                                </div>
                                <div className="col-md-12 text-center">
                                    <button type="submit" onClick={handleSubmit}>{isLoading ? <ReactLoading type='spin' color='#3f4d67' height={22} width={22}/>:'Submit'}</button>
                                </div>
                        </div>
                    </form>
                </div> 

            </div>
    )

}

export default CreatePatientProfile