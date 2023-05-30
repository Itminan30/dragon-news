import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    const style = {
        backgroundImage: `url(${bg})`,
        height: '500px'
    }
    return (
        <div>
            <div>
                <h4 className='fw-bold'>Login With</h4>
                <Button className='d-block w-100 my-3 d-flex align-items-center justify-content-center gap-1' variant="outline-primary">
                    <FaGoogle /> Login With Google
                </Button>
                <Button className='d-block w-100 my-3 d-flex align-items-center justify-content-center gap-1' variant="outline-secondary">
                    <FaGithub /> Login With GitHub
                </Button>
            </div>

            <div className='my-5'>
                <h4 className='fw-semibold'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item>
                        <FaFacebook /> Facebook
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <FaTwitter /> Twitter
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <FaInstagram /> Instagram
                    </ListGroup.Item>
                </ListGroup>
            </div>

            <QZone></QZone>

            <div className='container-fluid text-white text-center pt-5 px-3' style={style}>
                <h2 className='mb-4 mt-5 fw-bold'>Create an Amazing Newspaper</h2>
                <p className='mb-4 mx-4 text-secondary'>
                    Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                </p>
                <Button className='rounded-0 px-4 py-3 fs-4 fw-semibold' variant="danger">Learn More</Button>
            </div>
        </div >
    );
};

export default RightNav;