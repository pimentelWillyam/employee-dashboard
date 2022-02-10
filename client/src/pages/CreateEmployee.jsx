import CreateEmployeeForms from '../components/forms/CreateEmployeeForms'

import ReturnToDashboardButton from '../components/buttons/ReturnToDashboardButton'
import CreateEmployeeButton from '../components/buttons/CreateEmployeeButton'

import {Container,
        Row,
        Col
} from 'react-bootstrap'


export default function CreateEmployee(){
    return (
        <Container>
            <br />
            <Row> 
                <CreateEmployeeForms/>
            </Row>
            <Row>
                <Col>
                    <ReturnToDashboardButton/>
                </Col>
                <Col>
                    <CreateEmployeeButton/>
                </Col>
                
            </Row>
            

        </Container>
    )
}