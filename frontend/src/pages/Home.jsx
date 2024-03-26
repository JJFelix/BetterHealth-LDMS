import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
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
  )
}

export default Home