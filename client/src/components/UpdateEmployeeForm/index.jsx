import handleEmployeeUpdate from '../../handlers/handleEmployeeUpdate'

import {useState} from 'react' 

import {Link} from 'react-router-dom'

import {Container,
    Row,
    Col,
    Button,
    Form
} from 'react-bootstrap'


export default function UpdateEmployeeForm ({id,name,email,phone}) {
    const [updatedName,setUpdatedName] = useState(name)
    const [updatedEmail,setUpdatedEmail] = useState(email)
    const [updatedPhone,setUpdatedPhone] = useState(phone)
    return (
        <Container>
            <br />
            <Row> 
                <Form>
                    <Form.Control onChange={(event) => setUpdatedName(event.target.value)} type="text" placeholder={name}/>
                    <br />
                    <Form.Control onChange={(event) => setUpdatedEmail(event.target.value)} type="email" placeholder={email} />
                    <br />
                    <Form.Control onChange={(event) => setUpdatedPhone(event.target.value)} type="text" placeholder={phone} />
                    <br />
                </Form>
            </Row>
            <Row>
                <Col>
                    <Link to ='/'><Button variant="warning">Return</Button></Link>
                </Col>
                <Col>
                    <Link to ='/'><Button id="update-employee-button" onClick={() => {handleEmployeeUpdate(id,updatedName,updatedEmail,updatedPhone)}} variant="success" type="submit">Update Employee</Button></Link>
                </Col>
                
            </Row>
        </Container>


    )
}