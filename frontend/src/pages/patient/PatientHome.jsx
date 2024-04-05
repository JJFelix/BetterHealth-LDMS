import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import viteLogo from '/logo.png'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PatientHome = () => {
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
        var getUrl = "patient/get-email"
        axios.get(baseurl+getUrl, config).then((resp)=>{
            console.log(resp.data)
        }).catch((err)=>{
            console.log(err)
            navigate("/create-profile")
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

export default PatientHome;