import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const cards = [
        'CardioVascular Disease', 'Diabetes', 
        'Stroke', 'Lung Cancer'
    ]
  return (
    <div className='cards'>
        {cards &&(
            cards.map((card, index)=>(
                <div className='card' key={index}>
                    <Link
                        to='/disease'
                    >
                    <p>{card}</p>
                    </Link>
                </div>
            ))
        )}        
    </div>
  )
}

export default Home