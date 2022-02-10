import './style.css'

import {Button} from 'react-bootstrap'

import {Link} from 'react-router-dom'

function createEmployee(){
    return (console.log("adding new employee..."))
}

export default function CreateEmployeeButton(){
    return (
       <Link to = 'create-employee'> <Button id="add-new-employee-button" variant="success"  onClick={createEmployee}> <i class="bi bi-plus"></i> </Button> </Link> 
    )
}