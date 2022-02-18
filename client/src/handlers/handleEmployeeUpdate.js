import {Employee} from '../api/Employee'

export default function handleEmpoyeeUpdate(id,name,email,phone){
    console.log(name,email,phone)
    console.log(id)
    Employee.UpdateEmployeeById(id,name,email,phone)
    
}