import { useEffect } from 'react'
import {Employee} from '../../../api/Employee'

import {Table,
        Button
} from 'react-bootstrap'

export default function EmployeeDashboard (){
    async function getAllEmployees(){
        let employeeList = await Employee.getEmployees()
        let nEmployees = employeeList.length
        console.log(`the array has ${nEmployees} members`)
    }   
    getAllEmployees()
    
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