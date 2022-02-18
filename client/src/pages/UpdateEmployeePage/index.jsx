import './style.css'

import {useState} from 'react'

import {useParams} from 'react-router-dom'

import {Employee} from '../../api/Employee'
import UpdateEmployeeForm from '../../components/UpdateEmployeeForm'
import {Container,
    Row,
    Col,
    Button,
    Form
} from 'react-bootstrap'




export default function UpdateEmployeePage () {
    const [employee,setEmployee] = useState([])
    const {id} = useParams()
    const fetchData = async () =>{
        setEmployee(await Employee.getEmployeeList())
    }
    fetchData()
    for (let i=0;i<employee.length;i++){
        if (employee[i]._id === id){
            setEmployee(employee[i])
            
        }
    }
    
    return (
        <Container>
            <UpdateEmployeeForm id = {employee._id} name = {employee.name} email = {employee.email} phone = {employee.phone} />
        </Container>


    )
}

