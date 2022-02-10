import {Container,
    Form
} from 'react-bootstrap'

export default function UpdateEmployeeForms (){
    return (
        <Container>
            <Form>
                <Form.Control type="text" placeholder="Enter the employee name" />
                <br />
                <Form.Control type="text" placeholder="Enter the employee phone number" />
                <br />
                <Form.Control type="email" placeholder="Enter the employee email" />
                <br/>
            </Form>
        </Container>
    )
}