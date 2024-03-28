import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Cardio = () => {
    const [formData, setFormData] = useState({
        patientId:'',
        age: '',
        cigsPerDay: '',
        prevalentHyp: '',
        totChol: '',
        sysBP:'',
        diaBP: '',
        BMI:'',
        heartRate: '',
        glucose:'',
        disease: 'cardio'
    })

    const [predData, setPredData] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }

      const navigate = useNavigate()
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you can send the form data to your backend or perform any other desired action
        console.log(formData);

        axios
        .post('http://localhost:8000/api/prediction/', formData,{
            headers:{
              'Content-Type':'multipart/form-data'
            }
          })
        .then((res)=>{
            console.log("risk score: ",res.data)
            setPredData(res.data)
          })
          .catch((err)=>{
            console.error(err)        
          })

        // setTimeout(() => {
        //     navigate('/results')
        // }, 5000)

      }

    // useEffect(()=>{
    //     const ageSelect = document.getElementById('age')
    //     for (let i = 0; i <= 100; i++) {
    //         const option = document.createElement('option');
    //         option.value = i;
    //         option.text = i;
    //         ageSelect.add(option);
    //     }
    //     const cigSelect = document.getElementById('cigsPerDay')
    //     for (let i = 0; i <= 100; i++) {
    //         const option = document.createElement('option');
    //         option.value = i;
    //         option.text = i;
    //         cigSelect.add(option);
    //     }
    // }, [])  

    const generateOptions = (start, end) => {
        const options = [];
        for (let i = start; i <= end; i++) {
          options.push(
            <option key={i} value={i}>
              {i}
            </option>
          );
        }
        return options;
      };
    

  return (
    <>
        {/* <div className='messages alert alert-success alert-dismissible fade show mt-2'>
            <p>Message here</p>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div> */}
        <div>
            <h3>Results</h3>
            Risk score: {predData}
        </div>
        <div className='page-wrapper'>
            <h4>CardioVascular Disease</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className='d-flex gap-5 justify-content-center'>
                    <div className="mb-3 col-2">
                        <label htmlFor="patientId" className="form-label">Patient ID</label>
                        <input type="text" className="form-control" id="patientId" name="patientId" value={formData.patientId} onChange={handleChange} required/>
                    </div>
                    <div className="mb-3 col-2">
                        <label htmlFor="age" className="form-label">Age</label>
                        {/* <input type="number" className="form-control" id="age"/> */}
                        <select className="form-control" id="age" name="age" value={formData.age} onChange={handleChange} required>
                            <option value="" disabled>Select</option>
                            {generateOptions(0, 100)}
                        </select>
                    </div>
                    <div className="mb-3 col-2">
                        <label htmlFor="cigsPerDay" className="form-label">Cigarettes Per Day</label>
                        {/* <input type="number" className="form-control" id="cigsPerDay"/> */}
                        <select className="form-control" id="cigsPerDay" name="cigsPerDay" value={formData.cigsPerDay} onChange={handleChange} required>
                            <option value="" disabled>Select</option>
                            {generateOptions(0, 100)}
                        </select>
                    </div>
                    <div className="mb-3 col-2">
                        <label htmlFor="prevalentHyp" className="form-label">Hypertension</label>
                        {/* <input type="radio" className="form-control" id="prevalentHyp"/> */}
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="prevalentHyp" id="prevalentHypYes" value="yes" checked={formData.prevalentHyp === 'yes'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="prevalentHypYes">Yes</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="prevalentHyp" id="prevalentHypNo" value="no" checked={formData.prevalentHyp === 'no'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="prevalentHypNo">No</label>
                        </div>
                    </div>
                </div>
                <div className='d-flex gap-5 justify-content-center'>
                    <div className="mb-3 col-3">
                        <label htmlFor="totChol" className="form-label">Cholesterol level</label>
                        <input type="number" className="form-control" id="totChol" name="totChol" value={formData.totChol} onChange={handleChange} required/>
                    </div>
                    <div className="mb-3 col-3">
                        <label htmlFor="sysBP" className="form-label">Systolic BP</label>
                        <input type="number" className="form-control" id="sysBP" name="sysBP" value={formData.sysBP} onChange={handleChange} required/>
                    </div>
                    <div className="mb-3 col-3">
                        <label htmlFor="diaBP" className="form-label">Diastolic BP</label>
                        <input type="number" className="form-control" id="diaBP" name="diaBP" value={formData.diaBP} onChange={handleChange} required/>
                    </div>
                </div>
                <div className='d-flex gap-5 justify-content-center'>
                    <div className="mb-3 col-3">
                        <label htmlFor="BMI" className="form-label">BMI</label>
                        <input type="number" className="form-control" id="BMI" name="BMI" value={formData.BMI} onChange={handleChange} required/>
                    </div>
                    <div className="mb-3 col-3">
                        <label htmlFor="heartRate" className="form-label">Heart Rate</label>
                        <input type="number" className="form-control" id="heartRate" name="heartRate" value={formData.heartRate} onChange={handleChange} required/>
                    </div>
                    <div className="mb-3 col-3">
                        <label htmlFor="glucose" className="form-label">Glucose Level</label>
                        <input type="number" className="form-control" id="glucose" name="glucose" value={formData.glucose} onChange={handleChange} required/>
                    </div>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </>    
  )
}

export default Cardio