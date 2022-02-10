import UpdateEmployeeForms from "../components/forms/UpdateEmployeeForms"

import ReturnToDashboardButton from "../components/buttons/ReturnToDashboardButton"
import InsertUpdateButton from "../components/buttons/InsertUpdateButton"

import {Container,
Row,
Col
} from 'react-bootstrap'

export default function UpdateEmployee () {
    return (
        <Container>
            <br />
            <Row>
                <UpdateEmployeeForms/>
            </Row>
            <Row>
                <Col>
                    <ReturnToDashboardButton/>
                </Col>
                <Col>
                    <InsertUpdateButton/>
                </Col>
            </Row>
        </Container>


    )
}