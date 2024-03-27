import React, { useEffect, useState } from 'react'

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
        Age: '',   
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