import './style.css'

import EmployeeDashboard from '../../components/tables/EmployeeDashboard'

import {Link} from 'react-router-dom'

import {Container,
        Button
} from 'react-bootstrap'

export default function Dashboard (){
    return (
        <Container>
            <EmployeeDashboard/>
                <Link to ='/create-employee'><Button id="create-new-employee-button" variant="success"><i className="bi bi-plus"></i></Button></Link>
        </Container>
        
    )
}