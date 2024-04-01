import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Cancer = () => {
    const [formData, setFormData] = useState({
      patientId:'',
      age:'', 
      yellow_fingers:'', 
      anxiety:'', 
      chronic_disease:'', 
      fatigue :'', 
      allergy :'', 
      wheezing:'', 
      alcohol_consuming:'', 
      coughing:'', 
      swallowing_difficulty:'',
      disease: 'cancer'
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
                Risk score: {predData}
            </div>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <div className='page-wrapper'>
            <h4>Lung Cancer</h4>
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
                    <div className="mb-3 col-3">
                        <label htmlFor="yellow_fingers" className="form-label">Yellow Fingers</label>
                        {/* <input type="radio" className="form-control" id="yellow_fingers"/> */}
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="yellow_fingers" id="yellow_fingersYes" value="yes" checked={formData.yellow_fingers === 'yes'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="yellow_fingersYes">Yes</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="yellow_fingers" id="yellow_fingersNo" value="no" checked={formData.yellow_fingers === 'no'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="yellow_fingersNo">No</label>
                        </div>
                    </div>
                    <div className="mb-3 col-3">
                        <label htmlFor="anxiety" className="form-label">Anxiety</label>
                        {/* <input type="radio" className="form-control" id="anxiety"/> */}
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="anxiety" id="anxietyYes" value="yes" checked={formData.anxiety === 'yes'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="anxietyYes">Yes</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="anxiety" id="anxietyNo" value="no" checked={formData.anxiety === 'no'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="anxietyNo">No</label>
                        </div>
                    </div>                 
                </div>
                <div className='d-flex gap-5 justify-content-center'>
                    <div className="mb-3 col-2">
                        <label htmlFor="chronic_disease" className="form-label">Chronic Disease</label>
                        {/* <input type="radio" className="form-control" id="chronic_disease"/> */}
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="chronic_disease" id="chronic_diseaseYes" value="yes" checked={formData.chronic_disease === 'yes'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="chronic_diseaseYes">Yes</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="chronic_disease" id="chronic_diseaseNo" value="no" checked={formData.chronic_disease === 'no'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="chronic_diseaseNo">No</label>
                        </div>
                    </div>
                    <div className="mb-3 col-2">
                        <label htmlFor="fatigue" className="form-label">Fatigue</label>
                        {/* <input type="radio" className="form-control" id="fatigue"/> */}
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="fatigue" id="fatigueYes" value="yes" checked={formData.fatigue === 'yes'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="fatigueYes">Yes</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="fatigue" id="fatigueNo" value="no" checked={formData.fatigue === 'no'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="fatigueNo">No</label>
                        </div>
                    </div>
                    <div className="mb-3 col-2">
                        <label htmlFor="allergy" className="form-label">Allergy</label>
                        {/* <input type="radio" className="form-control" id="allergy"/> */}
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="allergy" id="allergyYes" value="yes" checked={formData.allergy === 'yes'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="allergyYes">Yes</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="allergy" id="allergyNo" value="no" checked={formData.allergy === 'no'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="allergyNo">No</label>
                        </div>
                    </div>
                    <div className="mb-3 col-2">
                        <label htmlFor="wheezing" className="form-label">Wheezing</label>
                        {/* <input type="radio" className="form-control" id="wheezing"/> */}
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="wheezing" id="wheezingYes" value="yes" checked={formData.wheezing === 'yes'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="wheezingYes">Yes</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="wheezing" id="wheezingNo" value="no" checked={formData.wheezing === 'no'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="wheezingNo">No</label>
                        </div>
                    </div>
                </div>
                <div className='d-flex gap-5 justify-content-center'>
                    <div className="mb-3 col-3">
                        <label htmlFor="alcohol_consuming" className="form-label">Alcohol Consumption</label>
                        {/* <input type="radio" className="form-control" id="alcohol_consuming"/> */}
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="alcohol_consuming" id="alcohol_consumingYes" value="yes" checked={formData.alcohol_consuming === 'yes'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="alcohol_consumingYes">Yes</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="alcohol_consuming" id="alcohol_consumingNo" value="no" checked={formData.alcohol_consuming === 'no'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="alcohol_consumingNo">No</label>
                        </div>
                    </div>
                    <div className="mb-3 col-3">
                        <label htmlFor="coughing" className="form-label">Coughing</label>
                        {/* <input type="radio" className="form-control" id="coughing"/> */}
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="coughing" id="coughingYes" value="yes" checked={formData.coughing === 'yes'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="coughingYes">Yes</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="coughing" id="coughingNo" value="no" checked={formData.coughing === 'no'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="coughingNo">No</label>
                        </div>
                    </div>
                    <div className="mb-3 col-3">
                        <label htmlFor="swallowing_difficulty" className="form-label">Difficulty Swallowing</label>
                        {/* <input type="radio" className="form-control" id="swallowing_difficulty"/> */}
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="swallowing_difficulty" id="swallowing_difficultyYes" value="yes" checked={formData.swallowing_difficulty === 'yes'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="swallowing_difficultyYes">Yes</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="swallowing_difficulty" id="swallowing_difficultyNo" value="no" checked={formData.swallowing_difficulty === 'no'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="swallowing_difficultyNo">No</label>
                        </div>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </>    
  )
}

export default Cancer