import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import {useSelector} from 'react-redux'
import ReactLoading from 'react-loading'

const Diabetes = () => {
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

    useEffect(()=>{
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
        axios.post(baseurl+'patient/diabetes/update', values, config).then((resp)=>{
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
            bmi:'',
            highCholesterol: '',
            smoker: '',
            heartDisease: '',
            fruits: '',
            difficultyWalking:'',
            highBP: ''
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
            <br/>
            <br/>
            <br/>
            <h3>Results</h3>
            Risk score: xxx
        </div>
        <div className="container">
            <br/>
            <br/>
            <div className='row justify-content-center'>
                <div className='col-lg-12 form-section'>
                    <form className='form'>
                        <h4>Diabetes</h4>
                        <hr />
                        <div className='row justify-content-around'>
                            <div className='row justify-content-center col-md-12'>
                                <div class="form-group col-md-3">
                                    <label for="inputState">Patient</label>
                                    <select id="inputState" className="form-control" name='patientId' value={values.patientId} onChange={handleChange}>
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
                            <div class="form-group col-md-4">
                                <label for="bmi">BMI</label>
                                <input type="number" class="form-control" id="bmi" placeholder="BMI" name='bmi' value={values.bmi} onChange={handleChange}/>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputState">High Cholesterol</label>
                                <select id="inputState" class="form-control" name='highCholesterol' value={values.highCholesterol} onChange={handleChange}>
                                    <option selected>Choose...</option>
                                    <option value='yes'>Yes</option>
                                    <option value='no'>No</option>
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputState">Smoker</label>
                                <select id="inputState" class="form-control" name='smoker' value={values.smoker} onChange={handleChange}>
                                    <option selected>Choose...</option>
                                    <option value='yes'>Yes</option>
                                    <option value='no'>No</option>
                                </select>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputState">Heart Disease/Attack</label>
                                <select id="inputState" class="form-control" name='heartDisease' value={values.heartDisease} onChange={handleChange}>
                                    <option selected>Choose...</option>
                                    <option value='yes'>Yes</option>
                                    <option value='no'>No</option>
                                </select>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputState">Fruits</label>
                                <select id="inputState" class="form-control" name='fruits' value={values.fruits} onChange={handleChange}>
                                    <option selected>Choose...</option>
                                    <option value='yes'>Yes</option>
                                    <option value='no'>No</option>
                                </select>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputState">Difficulty Walking</label>
                                <select id="inputState" class="form-control" name='difficultyWalking' value={values.difficultyWalking} onChange={handleChange}>
                                    <option selected>Choose...</option>
                                    <option value='yes'>Yes</option>
                                    <option value='no'>No</option>
                                </select>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputState">High Blood Pressure</label>
                                <select id="inputState" class="form-control" name='highBP' value={values.highBP} onChange={handleChange}>
                                    <option selected>Choose...</option>
                                    <option value='yes'>Yes</option>
                                    <option value='no'>No</option>
                                </select>
                            </div>
                            <div className='col-md-6'>
                                <button className='btn btn-primary' onClick={handleSubmit} type='submit'>{isLoading ? <ReactLoading type='spin' color='#3f4d67' height={22} width={22}/>:'Submit'}</button>
                            </div>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    </>    
  )
}

export default Diabetes