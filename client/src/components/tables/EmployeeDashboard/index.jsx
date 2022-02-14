import { useEffect } from 'react'
import {Employee} from '../../../api/Employee'

import {Table,
        Button
} from 'react-bootstrap'

export default function EmployeeDashboard (){
    let employeeList
    async function hello(){
        employeeList = await Employee.getEmployees()
        for(let i=0;i<employeeList.length;i++){
            console.log(employeeList[i])
        }
    }
    hello()
    
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