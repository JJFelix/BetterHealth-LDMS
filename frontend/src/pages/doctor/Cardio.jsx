import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useFormik } from 'formik'
import {useSelector} from 'react-redux'
import ReactLoading from 'react-loading'

const Cardio = () => {
    const [accessGrants, setAccessGrants] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const baseurl = "http://127.0.0.1:8081/api/v1/"
    const accessToken = useSelector((state)=>state.auth.accessToken)

    const config = {
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    }

    useEffect(() => {
        axios.get(baseurl+'access/get-doctor-grants', config).then((resp)=>{
            console.log(resp.data)
            setAccessGrants(resp.data)
        }).catch((err)=>{
            console.error(err)
        })
    }, [])

    const onSubmit = () =>{
        setIsLoading(true)
        console.log(values)
        axios.post(baseurl+'patient/cardio/update', values, config).then((resp)=>{
            console.log(resp.data)
            setIsLoading(false)
        }).catch((err)=>{
            console.error(err)
            setIsLoading(false)
        })
    }

    const {values, handleSubmit, handleChange} = useFormik({
        initialValues: {
            patientId: '',
            cigsPerDay:'',
            hypertension:'',
            cholesterolLevel:'',
            systolicBp:'',
            diastolicBp:'',
            bmi:'',
            heartRate:'',
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
                        <h4>CardioVascular Disease</h4>
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
                                                    <option key={id} value={accessGrant.patient.id}>{accessGrant.patient.firstName} {accessGrant.patient.lastName}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                            </div>
                            <div class="form-group col-md-3">
                                <label for="cigsPerDay">Cigerettes Per Day</label>
                                <input type="number" class="form-control" id="inputEmail4" placeholder="Cigs" name='cigsPerDay' value={values.cigsPerDay} onChange={handleChange}/>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputState">Hypertension</label>
                                <select id="inputState" class="form-control" name='hypertension' value={values.hypertension} onChange={handleChange}>
                                    <option selected>Choose...</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="cholesterol">Cholesterol Level</label>
                                <input type="number" class="form-control" id="cholesterol" placeholder="cholesterolLevel" name='cholesterolLevel' value={values.cholesterolLevel} onChange={handleChange}/>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="systolicBp">Systolic Bp</label>
                                <input type="number" class="form-control" id="systolicBp" placeholder="Systolic BP" name='systolicBp' value={values.systolicBp} onChange={handleChange}/>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="diastolicBp">Diastolic Bp</label>
                                <input type="number" class="form-control" id="diastolicBp" placeholder="Diastolic BP" name='diastolicBp' value={values.diastolicBp} onChange={handleChange}/>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="bmi">BMI</label>
                                <input type="number" class="form-control" id="bmi" placeholder="BMI" name='bmi' value={values.bmi} onChange={handleChange}/>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="heartrate">Heart Rate</label>
                                <input type="number" class="form-control" id="heartrate" placeholder="Heart Rate" name='heartRate' value={values.heartRate} onChange={handleChange}/>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="glucose">Glucose Level</label>
                                <input type="number" class="form-control" id="glucose" placeholder="Glucose Level" name='glucoseLevel' value={values.glucoseLevel} onChange={handleChange}/>
                            </div>
                            <div className='col-md-6'>
                                <button className='btn btn-primary' onClick={handleSubmit}>{isLoading ? <ReactLoading type='spin' color='#3f4d67' height={22} width={22}/>:'Submit'}</button>
                            </div>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    </>    
  )
}

export default Cardio