import './CardsComponents.css'
import React from 'react'
import Card from 'react-bootstrap/Card'


const CardsComponents = ({ title, imageUrl, body }) => {
    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={imageUrl} alt='' />
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h4>{title}</h4>
                </div>
                <div className='image'>
                    <img src={imageUrl} alt='' />

                </div>
                <div className='card-body'>
                    <p>{body}</p>
                </div>
                <div className='stars'>
                    <img src={imageUrl} alt='' />
                </div>
            </div>

        </div>



        /* <Card className='card-components'bg="danger">
             <Card.Body>
                 <Card.Title>{number}</Card.Title>
                 <Card.Text>{message}</Card.Text>
             </Card.Body>
         </Card>*/

    )
}

export default CardsComponents