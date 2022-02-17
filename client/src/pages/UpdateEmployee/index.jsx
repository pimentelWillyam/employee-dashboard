import {Link} from 'react-router-dom'

import {Container,
    Row,
    Col,
    Button,
    Form
} from 'react-bootstrap'

export default function UpdateEmployee ({id,name,email,phone}) {
    const [name,setName] = useState(props.name)
    const [email,setEmail] = useState(props.email)
    const [phone,setPhone] = useState(props.phone)

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
                    <Link to ='/'><Button onClick={() => handleEmployeeUpdate(props.id,name,email,phone)} variant="success">Update employee</Button></Link>
                </Col>
            </Row>
        </Container>


    )
}