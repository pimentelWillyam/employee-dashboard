import {useState} from 'react'

import {Container,
    Row,
    Col,
    Button,
    Form
} from 'react-bootstrap'


export default function UpdateEmployeeForm ({id,name,email,phone}) {

    return (
        <Container>
            <Row> 
                <Form>
                    <br />
                    <Form.Control onChange={(event) => setName(event.target.value)} type="text" placeholder={name} />
                    <br />
                    <Form.Control onChange = {(event) => setEmail(event.target.value)} type="email" placeholder= {email} />
                    <br />
                    <Form.Control onChange = {(event) => setPhone(event.target.value)} type="text" placeholder={phone} />
                    <br />
                </Form>
            </Row>
            <Row>
                <Col>
                    <Link to ='/'><Button variant="warning">Return</Button></Link>
                </Col>
                <Col>
                    <Link to = {'/'}><Button id="update-employee-button" onClick={() => handleEmployeeUpdate(id)} variant="success">Update employee</Button></Link>
                </Col>
            </Row>
        </Container>


    )
}