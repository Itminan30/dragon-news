import React, { useContext } from 'react';
import { Button, Container, Figure, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../provider/AuthProvider';
import FigureImage from 'react-bootstrap/FigureImage'

const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
        .then(() => console.log("user logged out"))
        .catch((error) => console.log(error));
    }

    return (
        <Container>
            <Navbar className='my-3' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Nav className="mx-auto d-flex flex-row gap-3 align-items-center">
                        <Link className='text-decoration-none text-secondary' to="/">Home</Link>
                        <Link className='text-decoration-none text-secondary' >About</Link>
                        <Link className='text-decoration-none text-secondary' >Career</Link>
                    </Nav>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='flex-grow-0'>
                        <Nav className='align-items-center'>
                            {user ? <Figure className='mb-0 me-2'>
                                <Figure.Image
                                    className='mb-0 img-fluid img-thumbnail rounded-circle border-0'
                                    width={50}
                                    height={50}
                                    alt="user pic"
                                    src={user?.photoURL}
                                />
                            </Figure>:
                            <FaUserCircle style={{ fontSize: '2rem', marginRight: '15px' }}></FaUserCircle>
                            }
                            
                            {user ?
                                <Button onClick={handleLogout} className='rounded-0' variant="secondary">Logout</Button> :
                                <Link to='/login'>
                                    <Button className='rounded-0' variant="secondary">Login</Button>
                                </Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;