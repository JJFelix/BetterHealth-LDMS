import React from "react";
import { useState } from "react";
import CancerResults from "./resutls/cancerResult";
import { useLocation } from "react-router-dom";
import viteLogo from '/logo.png'
import CardioResults from "./resutls/cardioResults";
import DiabetesResults from "./resutls/diabetesResults";
import StrokeResults from "./resutls/strokeResults";

const RecommenadtionResults = () =>{
    const location = useLocation()
    const results = location.state;
    console.log(results)
    return(
        <>
            <div className="d-flex justify-content-center align-items-center">
            <div>
                {/* <a href="https://vitejs.dev" target="_blank"> */}
                <img src={viteLogo} className="logo" alt="Vite logo" />
                {/* </a> */}
            </div>
            <h1>BetterHealth LDMS</h1>
            </div>
            <div className="container">
                {results.disease == 'cancer'? <CancerResults results={results}/>: null}
                {results.disease == 'cardio'? <CardioResults results={results}/>: null}
                {results.disease == 'diabetes'? <DiabetesResults results={results}/>: null}
                {results.disease == 'stroke'? <StrokeResults results={results}/>: null}
            </div>
        </>
    )

}

export default RecommenadtionResults;