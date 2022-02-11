import {Link} from 'react-router-dom'

import {Container,
        Row,
        Col,
        Form,
        Button
} from 'react-bootstrap'


export default function CreateEmployee(){
    return (
        <Container>
            <br />
            <Row> 
                <Form>
                    <Form.Control type="text" placeholder="Enter the employee name" />
                    <br />
                    <Form.Control type="text" placeholder="Enter the employee phone number" />
                    <br />
                    <Form.Control type="email" placeholder="Enter the employee email" />
                    <br />
                </Form>
            </Row>
            <Row>
                <Col>
                    <Link to ='/'><Button variant="warning">Return</Button></Link>
                </Col>
                <Col>
                    <Link to ='/'><Button variant="success">Add employee</Button></Link>
                </Col>
                
            </Row>
            

        </Container>
    )
}