import { useState } from 'react'

import {Table,
        Button
} from 'react-bootstrap'

export default function EmployeeDashboard (){
    async function getAllEmployees(){
        const response = await fetch('http://localhost:5000/employees')
       const employeeList = await response.json()
       return employeeList
    }
    const [employeeList,setEmployeeList] = useState([getAllEmployees])
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