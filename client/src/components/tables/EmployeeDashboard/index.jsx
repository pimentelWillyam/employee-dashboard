import './style.css'

import { useState,useEffect } from 'react'

import {Employee} from '../../../api/Employee'
import handleEmployeeDeletion from '../../../handlers/handleEmployeeDeletion'

import {Table,
        Button
} from 'react-bootstrap'

export default function EmployeeDashboard (){
    const [employeeList,setEmployeeList] = useState([])
    const fetchData = async () => {
        const data = await Employee.getEmployeeList()
        setEmployeeList(data)
    }
    fetchData()
    useEffect(() =>{      
    }, [employeeList])
    
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
                    {employeeList.map( (employee) =>{
                        return(
                            <tr key={employee.email}> 
                                <th>{employee.name}</th>
                                <th>{employee.email}</th>    
                                <th>{employee.phone}</th>
                                <th className="botoes"><Button variant ="danger" onClick={() => handleEmployeeDeletion(employee._id)}>Delete</Button>
                                                        <Button variant = "warning">Update</Button>
                                </th>
                            </tr>
             
                        )
                    })}
            </tbody>
        </Table>
    )    
}