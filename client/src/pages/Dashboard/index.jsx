import EmployeeDashboard from '../../components/tables/EmployeeDashboard'

import {Link} from 'react-router-dom'

import {Container,
        Button
} from 'react-bootstrap'

export default function Dashboard (){
    return (
        <Container>
            <EmployeeDashboard/>
                <Link to ='/create-employee'><Button variant="success">Add employee</Button></Link>
        </Container>
        
    )
}