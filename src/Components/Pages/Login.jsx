import React from "react";
import { Button, Form, Stack } from "react-bootstrap";
import '../../App';

const Login = (
    {
        email,
        password,
        handleChange,
        handleSubmit
    }
) => {
    return(
        <>
        <div className="login container">
            <Stack gap={2}>
                <h3 className="text-center">Login</h3>
                <Form onSubmit={{}} className="d-flex flex-column justify-content-center align-items-center">
                    <Form.Group className="mb-3 d-flex flex-column align-items-start w-50">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            name="email"
                            type="email"
                            value={email}
                            onChange={{}}
                            required
                            placeholder="Type your email"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex flex-column align-items-start w-50">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name="password"
                            type="password"
                            value={password}
                            onChange={{}}
                            required
                            placeholder="Type your password"
                        />
                    </Form.Group>
                    <Button className="h-100 w-20 mt-2 mb-3" variant="success" type="submit">
                        Submit
                    </Button>
                </Form>
            </Stack>
        </div>
        </>
    );
};

export default Login;