import './style.css'

import {useState} from 'react'

import {Employee} from '../../api/Employee'

import {Link} from 'react-router-dom'

import {Container,
        Row,
        Col,
        Form,
        Button
} from 'react-bootstrap'


export default function CreateEmployee(){
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')

    function handleEmployeeCreation(){
        console.log(name)
        console.log(email)
        console.log(phone)
        Employee.postEmployee(name,email,phone)
    }  
    return (
        <Container>
            <br />
            <Row> 
                <Form>
                    <Form.Control onChange={(event) => setName(event.target.value)} type="text" placeholder="Enter the employee name" />
                    <br />
                    <Form.Control onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Enter the employee email" />

                    <br />
                    <Form.Control onChange={(event) => setPhone(event.target.value)} type="text" placeholder="Enter the employee phone number" />
                    <br />
                </Form>
            </Row>
            <Row>
                <Col>
                    <Link to ='/'><Button variant="warning">Return</Button></Link>
                </Col>
                <Col>
                    <Link to ='/'><Button id="add-employee-button" onClick={handleEmployeeCreation} variant="success" type="submit">Add employee</Button></Link>
                </Col>
                
            </Row>
            

        </Container>
    )
}