import { useEffect } from 'react'
import {Employee} from '../../../api/Employee'

import {Table,
        Button
} from 'react-bootstrap'

export default function EmployeeDashboard (){
    function getAllEmployees(){
        let employeeList = Employee.getEmployees()
        console.log(employeeList)
        return employeeList

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