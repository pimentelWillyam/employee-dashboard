import {Employee} from '../api/Employee'

export default function handleEmployeeDeletion(id){
    Employee.deleteEmployeeById(id)
    
}