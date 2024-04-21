import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import {useSelector} from 'react-redux';
import ReactLoading from 'react-loading';
import CancerResults from './resutls/cancerResult';
import viteLogo from '/logo.png'
import { useNavigate } from 'react-router-dom';

const Cancer = () => {
    const navigate = useNavigate()
    const [accessGrants, setAccessGrants] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [results, setResults] = useState({
        recommendation1: 0,
        recommendation2: 0,
        recommendation3: 0,
        recommendation4: 0,
        recommendation5: 0,
        riskScore: 0
    })
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
        axios.post(baseurl+'patient/lungcancer/update', values, config).then((resp)=>{
            console.log(resp.data)
            setResults(resp.data)
            setIsLoading(false)
            resp.data['disease'] = 'cancer'
            navigate('/recommendation-results', {state: resp.data} )
        }).catch((err)=>{
            console.error(err)
            setIsLoading(false)
        })
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
            swallowingDifficulty: ''
        },
        onSubmit
    })

  return (
    <>
       <div className="d-flex justify-content-center align-items-center">
          <div>
            {/* <a href="https://vitejs.dev" target="_blank"> */}
              <img src={viteLogo} className="logo" alt="Vite logo" />
            {/* </a> */}
          </div>
          <h1>BetterHealth LDMS</h1>
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
                                <div className="form-group col-md-3">
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
                            <div className="form-group col-md-4">
                                <label for="inputState">Yellow Fingers</label>
                                <select id="inputState" className="form-control" name='yellowFingers' value={values.yellowFingers} onChange={handleChange}>
                                    <option selected>Select...</option>
                                    <option value='yes'>Yes</option>
                                    <option value='no'>No</option>
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputState">Anxiety</label>
                                <select id="inputState" className="form-control" name='anxiety' value={values.anxiety} onChange={handleChange}>
                                    <option selected>Select...</option>
                                    <option value='yes'>Yes</option>
                                    <option value='no'>No</option>
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputState">Chronic Disease</label>
                                <select id="inputState" className="form-control" name='chronicDisease' value={values.chronicDisease} onChange={handleChange}>
                                    <option selected>Select...</option>
                                    <option value='yes'>Yes</option>
                                    <option value='no'>No</option>
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputState">Fatigue</label>
                                <select id="inputState" className="form-control" name='fatigue' value={values.fatigue} onChange={handleChange}>
                                    <option selected>Select...</option>
                                    <option value='yes'>Yes</option>
                                    <option value='no'>No</option>
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputState">Allergy</label>
                                <select id="inputState" className="form-control" name='allergy' value={values.allergy} onChange={handleChange}>
                                    <option selected>Select...</option>
                                    <option value='yes'>Yes</option>
                                    <option value='no'>No</option>
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputState">Wheezing</label>
                                <select id="inputState" className="form-control" name='wheezing' value={values.wheezing} onChange={handleChange}>
                                    <option selected>Select...</option>
                                    <option value='yes'>Yes</option>
                                    <option value='no'>No</option>
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputState">Alcohol Consumption</label>
                                <select id="inputState" className="form-control" name='alcoholConsumption' value={values.alcoholConsumption} onChange={handleChange}>
                                    <option selected>Select...</option>
                                    <option value='yes'>Yes</option>
                                    <option value='no'>No</option>
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputState">Coughing</label>
                                <select id="inputState" className="form-control" name='coughing' value={values.coughing} onChange={handleChange}>
                                    <option selected>Select...</option>
                                    <option value='yes'>Yes</option>
                                    <option value='no'>No</option>difficultySwallowing
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputState">Difficulty Swallowing</label>
                                <select id="inputState" className="form-control" name='swallowingDifficulty' value={values.swallowingDifficulty} onChange={handleChange}>
                                    <option selected>Select...</option>
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

export default Cancer