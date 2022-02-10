import {Container,
    Form,
} from 'react-bootstrap'

export default function UpdateEmployeeForms (){
    return (
        <Container>
            <Form>
                <Form.Control type="text" placeholder="Enter the new name" />
                <br />
                <Form.Control type="text" placeholder="Enter the new phone number" />
                <br />
                <Form.Control type="email" placeholder="Enter the new email" />
                <br />
            </Form>
        </Container>
    )
}