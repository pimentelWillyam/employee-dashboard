import EmployeeDashboard from '../components/tables/EmployeeDashboard'
import AddNewEmployeeButton from '../components/buttons/AddNewEmployeeButton'

import {Container,
        Table
} from 'react-bootstrap'

export default function Dashboard (){
    return (
        <Container>
            <EmployeeDashboard/>
            <AddNewEmployeeButton/>
        </Container>
        
    )
}