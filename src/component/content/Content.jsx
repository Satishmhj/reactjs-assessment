import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import aboutUs from '../../assets/2.jpg'
import blog1 from '../../assets/3.jpg'
import blog2 from '../../assets/4.jpg'
import blog3 from '../../assets/5.jpg'

import './content.css';


const Content = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img src="https://cdn.britannica.com/18/216518-050-7EA8BFA5/traders-professionals-opening-bell-New-York-Stock-Exchange-NYSE-January-2-2019.jpg" className='img-caracoule' alt="" />

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/New_York_Stock_Exchange_-_panoramio_%282%29.jpg/1200px-New_York_Stock_Exchange_-_panoramio_%282%29.jpg" className='img-caracoule' alt="" />

                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Market_data_on_display_at_Taiwan_Stock_Exchange_20210208.jpg/1200px-Market_data_on_display_at_Taiwan_Stock_Exchange_20210208.jpg" className='img-caracoule' alt="" />

                </Carousel.Item>
            </Carousel>


            <section>
                <div className='container'>
                    <div className='title'>
                        <h2 className='text-center mb-4'>About Us</h2>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <img src={aboutUs} className='w-100' alt="about-us" />
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <h4 className='text-center'>Why Us ?</h4>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam pariatur, minima qui doloremque dolor magnam quis. Illum, repellat commodi enim blanditiis ipsum expedita suscipit dolor sapiente rem eligendi omnis animi?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quisquam repellendus debitis beatae, voluptas inventore. Quia commodi magnam veritatis maxime eligendi minima mollitia quisquam itaque, delectus labore eius, neque vitae.
                            </p>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam pariatur, minima qui doloremque dolor magnam quis. Illum, repellat commodi enim blanditiis ipsum expedita suscipit dolor sapiente rem eligendi omnis animi?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quisquam repellendus debitis beatae, voluptas inventore. Quia commodi magnam veritatis maxime eligendi minima mollitia quisquam itaque, delectus labore eius, neque vitae.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ backgroundColor: 'lightgray' }}>
                <div className='container'>
                <div className='title'>
                        <h2 className='text-center mb-4'>Related Stock</h2>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-sm-12'>
                            <Card>
                                <Card.Img variant="top" src={blog1} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12'>
                            <Card>
                                <Card.Img variant="top" src={blog2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12'>
                            <Card>
                                <Card.Img variant="top" src={blog3} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Content