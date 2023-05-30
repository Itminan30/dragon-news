import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    useTitle("Register")

    const handleAccepted = (event) => {
        setAccepted(event.target.checked);
    }

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                updateUser(name, photoUrl)
                    .then(() => {
                        console.log("profile updated");
                        form.reset();
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <Container className='w-50 mx-auto bg-secondary bg-opacity-10 p-5 rounded-2'>
            <h3>Register Your Account</h3>
            <hr className='my-4' />
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' required placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' required placeholder="Enter URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmailConfirm">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' required placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' required placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={() => setAccepted(!accepted)}
                        type="checkbox"
                        name='accept'
                        label=
                        {
                            <>
                                Accept <Link className='text-decoration-none' to='/terms'>Term & Conditions</Link>
                            </>
                        }
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Text className="text-danger">

                    </Form.Text>
                    <Form.Text className="text-success">

                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button>

                <Form.Group className="mt-3" controlId="formBasicCheckbox">
                    <Form.Text className="text-secondary">
                        Already Have an Account? <Link to='/login'>Login</Link>
                    </Form.Text>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default Register;