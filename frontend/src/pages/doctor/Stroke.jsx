import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import {useSelector} from 'react-redux'

const Stroke = () => {
    const [accessGrants, setAccessGrants] = useState([])
    const baseurl = "http://127.0.0.1:8081/api/v1/"
    const accessToken = useSelector((state)=>state.auth.accessToken)

    const config = {
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    }

    useEffect(()=>{
        axios.get(baseurl+'access/get-doctor-grants', config).then((resp)=>{
            console.log(resp.data)
            setAccessGrants(resp.data)
        }).catch((err)=>{
            console.error(err)
        })
    }, [])


    const onSubmit = () =>{

    }

    const {values, handleSubmit, handleChange} = useFormik({
        initialValues: {
            patientId: '',
            highBloodPressure:'',
            heartDisease:'',
            everMarried:'',
            workType:'',
            smokingStatus:'',
            bmi:'',
            residenceType:'',
            glucoseLevel:''
        },
        onSubmit
    })
    

  return (
    <>
        {/* <div className='messages alert alert-success alert-dismissible fade show mt-2'>
            <p>Message here</p>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div> */}
        <div>
            <h3>Results</h3>
            Risk score: xxx
        </div>
        <div className="container">
            <br/>
            <br/>
            <div className='row justify-content-center'>
                <div className='col-lg-12 form-section'>
                    <form className='form'>
                        <h4>Stroke</h4>
                        <hr />
                        <div className='row justify-content-around'>
                            <div className='row justify-content-center col-md-12'>
                                <div class="form-group col-md-3">
                                    <label for="inputState">Patient</label>
                                    <select id="inputState" class="form-control" name='patientId' value={values.patientId} onChange={handleChange}>
                                        <option selected>Select</option>
                                        {
                                            accessGrants.map((accessGrant, id)=>{
                                                return(
                                                    <option key={id}>{accessGrant.patient.firstName} {accessGrant.patient.lastName}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputState">High Blood Pressure</label>
                                <select id="inputState" class="form-control" name='highBloodPressure' value={values.highBloodPressure} onChange={handleChange}>
                                    <option selected>Choose...</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputState">Heart Disease</label>
                                <select id="inputState" class="form-control" name='heartDisease' value={values.heartDisease} onChange={handleChange}>
                                    <option selected>Choose...</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputState">Ever Married</label>
                                <select id="inputState" class="form-control" name='everMarried' value={values.everMarried} onChange={handleChange}>
                                    <option  value="" disabled>Choose...</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputState">Work Type</label>
                                <select id="inputState" class="form-control" name='workType' value={values.workType} onChange={handleChange}>
                                    <option value="" disabled>Select</option>
                                    <option>Government Job</option>
                                    <option>Never Worked</option>
                                    <option>Private</option>
                                    <option>Self Employed</option>
                                    <option>Child</option>
                                </select>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputState">Smoking Status</label>
                                <select id="inputState" class="form-control" name='smokingStatus' value={values.smokingStatus} onChange={handleChange}>
                                    <option value="" disabled>Select</option>
                                    <option>Formerly Smoked</option>
                                    <option>Never Smoked</option>
                                    <option>Currently Smokes</option>
                                    <option>Unknown</option>
                                </select>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="bmi">BMI</label>
                                <input type="number" class="form-control" id="bmi" placeholder="BMI" name='bmi' value={values.bmi} onChange={handleChange}/>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputState">Residence Type</label>
                                <select id="inputState" class="form-control" name='residenceType' value={values.residenceType} onChange={handleChange}>
                                    <option value="" disabled>Select</option>
                                    <option>Rural</option>
                                    <option>Urban</option>
                                </select>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="glucose">Glucose Level</label>
                                <input type="number" class="form-control" id="glucose" placeholder="Glucose Level" name='glucoseLevel' value={values.glucoseLevel} onChange={handleChange}/>
                            </div>
                            <div className='col-md-6'>
                                <button className='btn btn-primary'>Submit</button>
                            </div>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    </>    
  )
}

export default Stroke