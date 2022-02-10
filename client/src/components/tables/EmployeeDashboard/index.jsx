import { useState } from 'react'

import {Table,
        Button
} from 'react-bootstrap'

async function getAllEmployees(){
    const response = await fetch('http://localhost:5000/employees')
   const EmployeeList = await response.json()
   return EmployeeList
}



export default function EmployeeDashboard (){
    const [EmployeeList,setEmployeeList] = useState([])
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
                {EmployeeList.map(employee =>{
                    return(<p>employee</p>)
                })}
            </tbody>
        </Table>
    )    
}