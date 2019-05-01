import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Alert, Container, Col, Row, Form, Button } from 'react-bootstrap';

class NewUserView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            redirectToMain: false,
            showError: false
        }
    }

    onFieldChange = (evt) => {
        switch (evt.target.id) {
            case 'email-input':
                this.setState({
                    email: evt.target.value
                });
                break;
            case 'password-input':
                this.setState({
                    password: evt.target.value
                });
                break;

            default:
                console.log("No known input");
        }
    }

    onSubmitNewUser = (evt) => {
        evt.preventDefault();

        if (this.state.email !== '' && this.state.password !== '') {
            axios.post('/user/new', {
                "email": this.state.email,
                "password": this.state.password
            })
            .then((response) => {
    
                this.setState({
                    showError: false,
                    redirectToMain: true
                });
            })
            .catch((error) => {
                console.error("No BUENO!!!: ", error);
                this.setState({
                    showError: true
                });
            });           
        } else {
            this.setState({
                showError: true
            });
        }

    }


    render() {

        let alert;

        if(this.state.showError) {
            alert = <Alert key="danger" variant="danger">Please enter a valid email and a valid password.</Alert>;
        }

        if(this.state.redirectToMain) {
            return(
                <Redirect exact to="/login" />     
            );
        } else {
            return(
                <>

                    <Container>

                        <Row>
                            <Col md={{ span: 6, offset: 3 }}>
                                <h1>New User</h1>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={{ span: 6, offset: 3 }}>
                                {alert}
                                <Form>
                                    <Form.Group controlId="email-input">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control 
                                            type="email" 
                                            placeholder="Enter email" 
                                            value={this.state.email}
                                            onChange={this.onFieldChange}/>
                                    </Form.Group>

                                    <Form.Group controlId="password-input">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control 
                                            type="password" 
                                            placeholder="Password" 
                                            value={this.state.password}
                                            onChange={this.onFieldChange}/>
                                    </Form.Group>
                                    <Button variant="primary" type="submit" onClick={this.onSubmitNewUser}>
                                        Submit
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>;
                </>
            )
        }
    }
}

export default NewUserView;