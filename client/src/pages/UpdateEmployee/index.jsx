import {Link} from 'react-router-dom'

import {Container,
    Row,
    Col,
    Button,
    Form
} from 'react-bootstrap'

export default function UpdateEmployee () {
    return (
        <Container>
            <Row> 
                <Form>
                    <br />
                    <Form.Control type="text" placeholder="Enter the new employee name" />
                    <br />
                    <Form.Control type="text" placeholder="Enter the new employee phone number" />
                    <br />
                    <Form.Control type="email" placeholder="Enter the employee new email" />
                    <br />
                </Form>
            </Row>
            <Row>
                <Col>
                    <Link to ='/'><Button variant="warning">Return</Button></Link>
                </Col>
                <Col>
                    <Link to ='/'><Button onClick={() => console.log("clicou")} variant="success">Update employee</Button></Link>
                </Col>
            </Row>
        </Container>


    )
}