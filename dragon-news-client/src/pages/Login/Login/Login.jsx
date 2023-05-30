import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    useTitle("Login");
    const from = location.state?.from?.pathname;

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            console.log(result.user);
            form.reset();
            if(from){
                navigate(from, {replace: true});
            }
            else{
                navigate('/category/0');
            }
        })
        .catch(error => {
            console.log(error);
        })

    }
    return (
        <Container className='w-50 mx-auto bg-secondary bg-opacity-10 p-5 rounded-2'>
            <h3>Login Your Account</h3>
            <hr className='my-4' />
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' required placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' required placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Text className="text-danger">

                    </Form.Text>
                    <Form.Text className="text-success">

                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>

                <Form.Group className="mt-3" controlId="formBasicCheckbox">
                    <Form.Text className="text-secondary">
                        Don't Have an Account? <Link to='/register'>Register</Link>
                    </Form.Text>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default Login;