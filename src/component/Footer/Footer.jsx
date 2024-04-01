import React from 'react'
import Card from 'react-bootstrap/Card';

import './footer.css'

const Footer = () => {
    return (
        <>
            <Card className='copyright'>
                <Card.Body className='text-center'> <strong> © 2024 React project</strong></Card.Body>
            </Card>
        </>
    )
}

export default Footer