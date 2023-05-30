import React, { useEffect, useState } from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'
import { BsCalendar } from 'react-icons/bs';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://dragon-news-server-itminan30.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <h4 className='mb-4'>All Category</h4>
            <ListGroup className='rounded-1'>
                {
                    categories.map(category =>
                        <ListGroup.Item className='text-secondary fs-5 border-0 m-2' key={category.id}>
                            <Link to={`/category/${category.id}`} className='text-decoration-none text-secondary'>{category.name}</Link>
                        </ListGroup.Item>
                    )
                }
            </ListGroup>

            <Row xs={1} md={2} lg={1} className="g-4 mt-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={first} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text className='d-flex align-items-center'>
                                <span className='flex-grow-1 mt-1'>
                                    <span className='fw-semibold'>Sports</span>
                                </span>
                                <span>
                                    <BsCalendar className='text-secondary'></BsCalendar>
                                    <span className='text-secondary ms-2'><small>Jan 4, 2022</small></span>
                                </span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={second} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text className='d-flex align-items-center'>
                                <span className='flex-grow-1 mt-1'>
                                    <span className='fw-semibold'>Sports</span>
                                </span>
                                <span>
                                    <BsCalendar className='text-secondary'></BsCalendar>
                                    <span className='text-secondary ms-2'><small>Jan 4, 2022</small></span>
                                </span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={third} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text className='d-flex align-items-center'>
                                <span className='flex-grow-1 mt-1'>
                                    <span className='fw-semibold'>Sports</span>
                                </span>
                                <span>
                                    <BsCalendar className='text-secondary'></BsCalendar>
                                    <span className='text-secondary ms-2'><small>Jan 4, 2022</small></span>
                                </span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default LeftNav;