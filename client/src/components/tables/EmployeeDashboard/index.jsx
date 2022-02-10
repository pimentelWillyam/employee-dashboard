import {Table,
        Button
} from 'react-bootstrap'

async function getAllEmployees(){
    const response = await fetch('http://localhost:5000/employees')
   const EmployeeList = await response.json()
}



export default function EmployeeDashboard (){
    const data = getAllEmployees()
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </Table>
    )    
}