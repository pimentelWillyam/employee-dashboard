import EmployeeDashboard from '../components/tables/EmployeeDashboard'
import CreateEmployee from '../components/buttons/CreateEmployee'

import {Container,
        Table
} from 'react-bootstrap'

export default function Dashboard (){
    return (
        <Container>
            <EmployeeDashboard/>
            <CreateEmployee/>
        </Container>
        
    )
}