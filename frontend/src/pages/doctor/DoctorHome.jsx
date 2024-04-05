import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import viteLogo from '/logo.png'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DoctorHome = () => {
    const baseurl = "http://127.0.0.1:8081/api/v1/"
    const userType = useSelector((state)=>state.auth.userType)
    const accessToken = useSelector((state)=>state.auth.accessToken)
    const navigate = useNavigate()

    const config = {
        headers: {
            "Content-Type": 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }
    }

    useEffect(()=>{
        var getUrl = "doctor/get-by-email"
        axios.get(baseurl+getUrl, config).then((resp)=>{
            console.log(resp.data)
        }).catch((err)=>{
            console.error(err)
            if(err.response.status == 403){
                navigate("/login")
            }else if(err.response.status == 404){
                navigate("/create-profile")
            }
        })
    }, [])
    
    const cards = [
        'cardio', 'diabetes', 'stroke', 'cancer'
    ]
    const cards2 = {
        cardio: 'CardioVascular Disease', 
        diabetes: 'Diabetes',
        stroke: 'Stroke',
        cancer: 'Lung Cancer' 
    }
    
    const entries = Object.entries(cards2)
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
        <div className='cards'>
            {/* {cards &&(
                cards.map((card, index)=>(
                    <div className='card' key={index}>
                        <Link
                            to={`/${card}`}
                        >
                        <p>{card}</p>
                        </Link>
                    </div>
                ))
            )}         */}
            {entries && (
                entries.map(([key, value]) => (
                    <div className='card' key={key}>
                        <Link
                            to={`/${key}`}
                        >
                        <p>{value}</p>
                        </Link>
                    </div>
                ))
            )}
        </div>
    </>
  )
}

export default DoctorHome;