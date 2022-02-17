import {Employee} from '../api/Employee'

export default function handleEmpoyeeUpdate(id,name,email,phone){
    console.log(id)
    Employee.updatedEmployeeBy(id,name,email,phone)
    
}