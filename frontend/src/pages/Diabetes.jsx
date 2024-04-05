import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-router-dom'

const Diabetes = () => {
    const [formData, setFormData] = useState({
        patientId:'',
        HighBP: '',  
        HighChol: '',  
        BMI: '',  
        Smoker: '',  
        HeartDiseaseorAttack: '',  
        Fruits: '',  
        DiffWalk: '',  
        Sex: '',  
        Age: 0,   
        disease: 'diabetes'
    })

    const [predData, setPredData] = useState(null)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    
      const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)

        console.log(typeof(formData.Age));

        // if (0 <= parseInt(formData.Age) <= 24){ formData.Age = 1}
        // else if (25 <= parseInt(formData.Age) <= 29){ formData.Age = 2}
        // else if (30 <= parseInt(formData.Age) <= 34){ formData.Age = 3}
        // else if (35 <= parseInt(formData.Age) <= 39){ formData.Age = 4}
        // else if (40 <= parseInt(formData.Age) <= 44){ formData.Age = 5}
        // else if (45 <= parseInt(formData.Age) <= 49){ formData.Age = 6}
        // else if (50 <= parseInt(formData.Age) <= 54){ formData.Age = 7}
        // else if (55 <= parseInt(formData.Age) <= 59){ formData.Age = 8}
        // else if (60 <= parseInt(formData.Age) <= 64){ formData.Age = 9}
        // else if (65 <= parseInt(formData.Age) <= 69) {formData.Age = 10}
        // else if (70 <= parseInt(formData.Age) <= 74) {formData.Age = 11}
        // else if (parseInt(formData.Age) <= 79) {formData.Age = 12}
        // else {formData.Age = 13} 

        // switch (formData.Age){
        //     case formData.Age <=24:
        //         formData.Age = 1                
        //         break
        //     case formData.Age <=29:
        //         formData.Age = 2
        //         break
        //     case formData.Age <=34:
        //         formData.Age = 3               
        //         break
        //     case formData.Age <=39:
        //         formData.Age = 4
        //         break
        //     case formData.Age <=44:
        //         formData.Age = 5               
        //         break
        //     case formData.Age <=49:
        //         formData.Age = 6
        //         break
        //     case formData.Age <=54:
        //         formData.Age = 7               
        //         break
        //     case formData.Age <=59:
        //         formData.Age = 8
        //         break
        //     case formData.Age <=64:
        //         formData.Age = 9               
        //         break
        //     case formData.Age <=69:
        //         formData.Age = 10
        //         break
        //     case formData.Age <=74:
        //         formData.Age = 11               
        //         break
        //     case formData.Age <=79:
        //         formData.Age = 12
        //         break
        //     case formData.Age >= 80:
        //         formData.Age = 13
        //         break       
        // }
        
        console.log(formData)
        

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
      }


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
        <div className='messages alert alert-success alert-dismissible fade show mt-2'>
            <div>
                <h3>Results</h3>
                <div>Risk score: {predData && (Number(predData[0].toExponential(4)))}</div>
                Recommendations: {
                predData && (
                    predData[1][0].map((data, index)=>(
                        <div key={index}>{labels[index]} : {Number(data.toExponential(4))}</div>
                    ))
                )
                }
            </div>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <div className='page-wrapper'>
            <h4>Diabetes</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className='d-flex gap-5 justify-content-center'>
                    <div className="mb-3 col-2">
                        <label htmlFor="patientId" className="form-label">Patient ID</label>
                        <input type="text" className="form-control" id="patientId" name="patientId" value={formData.patientId} onChange={handleChange} required/>
                    </div>
                    <div className="mb-3 col-2">
                        <label htmlFor="Age" className="form-label">Age</label>
                        {/* <input type="number" className="form-control" id="Age"/> */}
                        <select className="form-control" id="Age" name="Age" value={formData.Age} onChange={handleChange} required>
                            <option value="" disabled>Select</option>
                            {generateOptions(0, 100)}
                        </select>
                    </div>
                    <div className="mb-3 col-2">
                        <label htmlFor="BMI" className="form-label">BMI</label>
                        <input type="number" className="form-control" id="BMI" name="BMI" value={formData.BMI} onChange={handleChange} required/>
                        {/* <select className="form-control" id="cigsPerDay" name="cigsPerDay" value={formData.cigsPerDay} onChange={handleChange} required>
                            <option value="">Select</option>
                            {generateOptions(0, 100)}
                        </select> */}
                    </div>
                    <div className="mb-3 col-2">
                        <label htmlFor="Sex" className="form-label">Sex</label>
                        {/* <input type="number" className="form-control" id="Sex" name="Sex" value={formData.Sex} onChange={handleChange} required/> */}
                        <select className="form-control" id="Sex" name="Sex" value={formData.Sex} onChange={handleChange} required>
                            <option value=""disabled>Select</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>                    
                </div>
                <div className='d-flex gap-5 justify-content-center'>
                    <div className="mb-3 col-3">
                        <label htmlFor="HighChol" className="form-label">High Cholesterol</label>
                        {/* <input type="radio" className="form-control" id="HighChol"/> */}
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="HighChol" id="HighCholYes" value="yes" checked={formData.HighChol === 'yes'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="HighCholYes">Yes</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="HighChol" id="HighCholNo" value="no" checked={formData.HighChol === 'no'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="HighCholNo">No</label>
                        </div>
                    </div>
                    <div className="mb-3 col-3">
                        <label htmlFor="Smoker" className="form-label">Smoker</label>
                        {/* <input type="radio" className="form-control" id="Smoker"/> */}
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="Smoker" id="SmokerYes" value="yes" checked={formData.Smoker === 'yes'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="SmokerYes">Yes</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="Smoker" id="SmokerNo" value="no" checked={formData.Smoker === 'no'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="SmokerNo">No</label>
                        </div>
                    </div>
                    <div className="mb-3 col-3">
                        <label htmlFor="HeartDiseaseorAttack" className="form-label">Heart Disease/Attack</label>
                        {/* <input type="radio" className="form-control" id="HeartDiseaseorAttack"/> */}
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="HeartDiseaseorAttack" id="HeartDiseaseorAttackYes" value="yes" checked={formData.HeartDiseaseorAttack === 'yes'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="HeartDiseaseorAttackYes">Yes</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="HeartDiseaseorAttack" id="HeartDiseaseorAttackNo" value="no" checked={formData.HeartDiseaseorAttack === 'no'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="HeartDiseaseorAttackNo">No</label>
                        </div>
                    </div>
                </div>
                <div className='d-flex gap-5 justify-content-center'>
                    <div className="mb-3 col-3">
                        <label htmlFor="Fruits" className="form-label">Fruits</label>
                        {/* <input type="radio" className="form-control" id="Fruits"/> */}
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="Fruits" id="FruitsYes" value="yes" checked={formData.Fruits === 'yes'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="FruitsYes">Yes</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="Fruits" id="FruitsNo" value="no" checked={formData.Fruits === 'no'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="FruitsNo">No</label>
                        </div>
                    </div>
                    <div className="mb-3 col-3">
                        <label htmlFor="DiffWalk" className="form-label">Difficulty Walking</label>
                        {/* <input type="radio" className="form-control" id="DiffWalk"/> */}
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="DiffWalk" id="DiffWalkYes" value="yes" checked={formData.DiffWalk === 'yes'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="DiffWalkYes">Yes</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="DiffWalk" id="DiffWalkNo" value="no" checked={formData.DiffWalk === 'no'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="DiffWalkNo">No</label>
                        </div>
                    </div>
                    <div className="mb-3 col-3">
                        <label htmlFor="HighBP" className="form-label">High Blood Pressure</label>
                        {/* <input type="radio" className="form-control" id="HighBP"/> */}
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="HighBP" id="HighBPYes" value="yes" checked={formData.HighBP === 'yes'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="HighBPYes">Yes</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="HighBP" id="HighBPNo" value="no" checked={formData.HighBP === 'no'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="HighBPNo">No</label>
                        </div>
                    </div>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </>    
  )
}

export default Diabetes