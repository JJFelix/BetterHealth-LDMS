import React, { useEffect, useState } from 'react'

const Stroke = () => {
    const [formData, setFormData] = useState({
        patientId:'',
        gender:'',
        age:'',
        hypertension:'',
        heart_disease:'',
        ever_married:'',
        work_type:'',
        Residence_type:'',
        avg_glucose_level:'',
        bmi:'',
        smoking_status:'',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you can send the form data to your backend or perform any other desired action
        console.log(formData);
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
        <div className='page-wrapper'>
            <h4>Stroke</h4>
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
                            <option value="">Select</option>
                            {generateOptions(0, 100)}
                        </select>
                    </div>
                    <div className="mb-3 col-2">
                        <label htmlFor="gender" className="form-label">Sex</label>
                        {/* <input type="number" className="form-control" id="gender"/> */}
                        <select className="form-control" id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
                            <option value="" disabled>Select</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div className="mb-3 col-2">
                        <label htmlFor="hypertension" className="form-label">High Blood Pressure</label>
                        {/* <input type="radio" className="form-control" id="hypertension"/> */}
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="hypertension" id="hypertensionYes" value="yes" checked={formData.hypertension === 'yes'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="hypertensionYes">Yes</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="hypertension" id="hypertensionNo" value="no" checked={formData.hypertension === 'no'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="hypertensionNo">No</label>
                        </div>
                    </div>
                </div>
                <div className='d-flex gap-5 justify-content-center'>
                    <div className="mb-3 col-2">
                        <label htmlFor="heart_disease" className="form-label">Heart Disease</label>
                        {/* <input type="radio" className="form-control" id="heart_disease"/> */}
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="heart_disease" id="heart_diseaseYes" value="yes" checked={formData.heart_disease === 'yes'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="heart_diseaseYes">Yes</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="heart_disease" id="heart_diseaseNo" value="no" checked={formData.heart_disease === 'no'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="heart_diseaseNo">No</label>
                        </div>
                    </div>
                    <div className="mb-3 col-2">
                        <label htmlFor="ever_married" className="form-label">Ever Married</label>
                        {/* <input type="radio" className="form-control" id="ever_married"/> */}
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="ever_married" id="ever_marriedYes" value="yes" checked={formData.ever_married === 'yes'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="ever_marriedYes">Yes</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="ever_married" id="ever_marriedNo" value="no" checked={formData.ever_married === 'no'} onChange={handleChange} required/>
                            <label className="form-check-label" htmlFor="ever_marriedNo">No</label>
                        </div>
                    </div>
                    <div className="mb-3 col-2">
                        <label htmlFor="work_type" className="form-label">Work Type</label>
                        {/* <input type="radio" className="form-control" id="work_type"/> */}
                        <select className="form-control" id="work_type" name="work_type" value={formData.work_type} onChange={handleChange} required>
                            <option value="" disabled>Select</option>
                            <option>Government Job</option>
                            <option>Never Worked</option>
                            <option>Private</option>
                            <option>Self Employed</option>
                            <option>Child</option>
                        </select>
                    </div>
                    <div className="mb-3 col-2">
                        <label htmlFor="smoking_status" className="form-label">Smoking Status</label>
                        {/* <input type="radio" className="form-control" id="smoking_status"/> */}
                        <select className="form-control" id="smoking_status" name="smoking_status" value={formData.smoking_status} onChange={handleChange} required>
                            <option value="" disabled>Select</option>
                            <option>Formerly Smoked</option>
                            <option>Never Smoked</option>
                            <option>Currently Smokes</option>
                            <option>Unknown</option>
                        </select>
                    </div>
                </div>
                <div className='d-flex gap-5 justify-content-center'>
                    <div className="mb-3 col-3">
                        <label htmlFor="bmi" className="form-label">BMI</label>
                        <input type="number" className="form-control" id="bmi" name="bmi" value={formData.bmi} onChange={handleChange} required/>
                    </div>
                    <div className="mb-3 col-3">
                        <label htmlFor="Residence_type" className="form-label">Residence Type</label>
                        {/* <input type="number" className="form-control" id="Residence_type" name="Residence_type" value={formData.Residence_type} onChange={handleChange} required/> */}
                        <select className="form-control" id="Residence_type" name="Residence_type" value={formData.Residence_type} onChange={handleChange} required>
                          <option value="" disabled>Select</option>
                          <option>Rural</option>
                          <option>Urban</option>
                        </select>
                    </div>
                    <div className="mb-3 col-3">
                        <label htmlFor="avg_glucose_level" className="form-label">Glucose Level</label>
                        <input type="number" className="form-control" id="avg_glucose_level" name="avg_glucose_level" value={formData.avg_glucose_level} onChange={handleChange} required/>
                    </div>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </>    
  )
}

export default Stroke