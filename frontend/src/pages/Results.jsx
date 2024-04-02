import React, { useEffect, useState } from 'react'
import viteLogo from '/logo.png'
import axios from 'axios'

const Results = () => {
    const [predData, setPredData] = useState(null)
    useEffect(()=>{
        axios
        .get('http://localhost:8000/api/prediction/')
        .then((res)=>{
            console.log(res.data.risk_score)
            setPredData(res.data.risk_score)
          })
          .catch((err)=>{
            console.error(err)        
          })
    }, [])
  return (
    <>
        <div className="d-flex justify-content-center align-items-center">
          <div>
              <img src={viteLogo} className="logo" alt="Vite logo" />
          </div>
          <h1>Results</h1>         
        </div>
        <div>
            Risk Score: {predData}
        </div>
    </>
  )
}

export default Results