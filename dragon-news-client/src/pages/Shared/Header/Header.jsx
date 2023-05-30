import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";


const Header = () => {
    
    return (
        <Container className='mt-5 mb-4'>
            <div className="text-center">
                <img className='img-fluid' src={logo} alt="" />
                <p className='text-secondary'>
                    <small>
                        Journalism Without Fear or Favour
                    </small>
                </p>
                <p>
                    {moment().format('dddd, MMMM DD, YYYY')}
                </p>
            </div>

            <div className='d-flex flex-row p-2 bg-secondary bg-opacity-25 gap-3'>
                <Button className='rounded-0' variant="danger">Latest</Button>
                <Marquee >
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;