import React from 'react'

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
                    <p>{card}</p>
                </div>
            ))
        )}        
    </div>
  )
}

export default Home