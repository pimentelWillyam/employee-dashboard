import './style.css'

import {Button} from 'react-bootstrap'

function createEmployee(){
    return (console.log("adding new employee..."))
}

export default function CreateEmployeeButton(){
    return (
        <Button id="add-new-employee-button" variant="success"  onClick={createEmployee}> <i class="bi bi-plus"></i> </Button>
    )
}