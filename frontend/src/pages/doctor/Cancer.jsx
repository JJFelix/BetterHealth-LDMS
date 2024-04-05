import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import {useSelector} from 'react-redux';

const Cancer = () => {
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
            yellowFingers:'',
            anxiety:'',
            chronicDisease:'',
            fatigue:'',
            allergy:'',
            wheezing:'',
            alcoholConsumption:'',
            coughing:'',
            difficultySwallowing: ''
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
                        <h4>Lung Cancer</h4>
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
                            <div class="form-group col-md-4">
                                <label for="inputState">Yellow Fingers</label>
                                <select id="inputState" class="form-control" name='yellowFingers' value={values.yellowFingers} onChange={handleChange}>
                                    <option selected>Select...</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputState">Anxiety</label>
                                <select id="inputState" class="form-control" name='anxiety' value={values.anxiety} onChange={handleChange}>
                                    <option selected>Select...</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputState">Chronic Disease</label>
                                <select id="inputState" class="form-control" name='chronicDisease' value={values.chronicDisease} onChange={handleChange}>
                                    <option selected>Select...</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputState">Fatigue</label>
                                <select id="inputState" class="form-control" name='fatigue' value={values.fatigue} onChange={handleChange}>
                                    <option selected>Select...</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputState">Allergy</label>
                                <select id="inputState" class="form-control" name='allergy' value={values.allergy} onChange={handleChange}>
                                    <option selected>Select...</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputState">Wheezing</label>
                                <select id="inputState" class="form-control" name='wheezing' value={values.wheezing} onChange={handleChange}>
                                    <option selected>Select...</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputState">Alcohol Consumption</label>
                                <select id="inputState" class="form-control" name='alcoholConsumption' value={values.alcoholConsumption} onChange={handleChange}>
                                    <option selected>Select...</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputState">Coughing</label>
                                <select id="inputState" class="form-control" name='coughing' value={values.coughing} onChange={handleChange}>
                                    <option selected>Select...</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputState">Difficulty Swallowing</label>
                                <select id="inputState" class="form-control" name='difficultySwallowing' value={values.difficultySwallowing} onChange={handleChange}>
                                    <option selected>Select...</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
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

export default Cancer