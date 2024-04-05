import { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import ReactLoading from 'react-loading'
import {useSelector} from 'react-redux'

const PatientManageDataAccess = () =>{
    const [isLoading, setIsLoading] = useState(false)
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const baseurl = "http://127.0.0.1:8081/api/v1/"
    const accessToken = useSelector((state)=>state.auth.accessToken)
    const [grants, setGrants] = useState([])

    const config = {
        headers: {
            "Content-Type": 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }
    }

    useEffect(()=>{
        axios.get(baseurl + "access/get", config).then((resp)=>{
            console.log(resp.data)
            setGrants(resp.data)
        }).catch((err)=>{
            console.error(err)
        })
    }, [])

    const onSubmit = () =>{
        setIsLoading(true)
        axios.post(baseurl+'access/grant',values, config).then((resp)=>{
            var tempArr = grants
            tempArr.push(resp.data)
            setGrants(tempArr)
            console.log(resp)
            setIsLoading(false)
        }).catch((err)=>{
            console.error(err)
            setIsLoading(false)
        })
    }

    const revokeGrant = (index) =>{
        setButtonDisabled(true)
        var grantConfig = config
        grantConfig['params'] = {
            grantId: grants[index].id
        }
        axios.delete(baseurl+"access/delete", grantConfig).then((resp)=>{
            console.log(resp.data)
            //remove the grant from the array
            setGrants([])
            var tempArr = grants
            tempArr.splice(index, 1)
            console.log(tempArr)
            setGrants(tempArr)
            console.log(grants)
            setButtonDisabled(false)

        }).catch((err)=>{
            console.error(err)
            setButtonDisabled(false)
        })
    }

    const {values, handleChange, handleSubmit} = useFormik({
        initialValues:{
            doctorEmail: ''
        },
        onSubmit
    })
    return(
        <div className="container">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            <div className="row justify-content-center">
                <div className="col-lg-5 form-section">
                    <form className="form">
                        <h3>Grant Access</h3>
                        <div className="row gy-3">
                            <div className="col-md-12">
                                <input
                                    type="email"
                                    className="form-control"
                                    name = "doctorEmail"
                                    placeholder="Doctor's Email"
                                    value={values.doctorEmail}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="col-md-12 text-center">
                                    <button type="submit" onClick={handleSubmit}>{isLoading ? <ReactLoading type='spin' color='#3f4d67' height={22} width={22}/>:'Submit'}</button>
                                </div>

                            </div>
                        </div>
                    </form>
                    
                </div> 
               
                <h3 style={{marginTop: '40px'}}>Current Access Grants</h3>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Hospital</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            grants.map((grant, id)=>{
                                return(
                                    <tr key={id}>
                                        <td>{grant.doctor.firstName}</td>
                                        <td>{grant.doctor.lastName}</td>
                                        <td>{grant.doctor.gender}</td>
                                        <td>{grant.doctor.hospital.name}</td>
                                        <td><button className="btn-outline btn-danger" disabled={buttonDisabled} onClick={()=>revokeGrant(id)}>Revoke</button></td>
                                    </tr>
                                )
                            })
                        }                        
                    </tbody>
                </table>

            </div>

        </div>
    )

}

export default PatientManageDataAccess;