import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../../Shared/RightNav/RightNav';
import LeftNav from '../../Shared/LeftNav/LeftNav';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle("Home");
    return (
        <div>
            <h2 className='text-center border'>
                Main Contents
            </h2>
        </div>
    );
};

export default Home;