import React, {useState} from "react";
import { useFormik } from "formik";
import ReactLoading from 'react-loading';

const CancerResults = ({results}) =>{
    const [isLoading, setIsLoading] = useState(false)

    console.log(results)

    const onSubmit = () =>{

    }

    const {values, handleChange, handleSubmit} = useFormik({
        initialValues: {
            carbohydrates: results.recommendation1,
            protein: results.recommendation2,
            fat: results.recommendation3,
            magnesiumContent: results.recommendation4,
            fiberContent: results.recommendation5,
            riskScore: results.riskScore
        },
        onSubmit
    })
    return(
        <>
            <h5><i>Lung cancer Risk Score: { Math.round(results.riskScore * 100)} %</i></h5>
            <br/>
            <h5>Recommendations:</h5>
            <form>
                <div className="row mb-3">
                    <label for="carbohydrates" className="col-sm-6 col-form-label">Carbohydrates </label>
                    <div className="col-sm-6">
                    <input type="number" className="form-control" id="carbohydrates" name="carbohydrates" value={values.carbohydrates} onChange={handleChange} defaultValue={results.carbohydrates}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="protein" className="col-sm-6 col-form-label">Protein </label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="protein" name="protein" value={values.protein} onChange={handleChange}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="fat" className="col-sm-6 col-form-label">Fat</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="fat" name="fat" value={values.fat} onChange={handleChange}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="magnesiumContent" className="col-sm-6 col-form-label">Magnesium Content</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="magnesiumContent" name="magnesiumContent" value={values.magnesiumContent} onChange={handleChange}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="fiberContent" className="col-sm-6 col-form-label">Fiber Content</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="fiberContent" name="fiberContent" value={values.fiberContent} onChange={handleChange}/>
                    </div>
                    
                    <div className='col-sm-12'>
                        <br/>
                        <button className='btn btn-primary' onClick={handleSubmit} type='submit'>{isLoading ? <ReactLoading type='spin' color='#3f4d67' height={22} width={22}/>:'Save'}</button>
                    </div>
                </div>

            </form>

        </>
    )
}

export default CancerResults;