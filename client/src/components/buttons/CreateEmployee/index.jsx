import './style.css'

import {Button} from 'react-bootstrap'

function createEmployee(){
    return (console.log("created"))
}

export default function CreateEmployee(){
    return (
        <Button id="create-employee-button" variant="success"  onClick={createEmployee}> <i class="bi bi-plus"></i> </Button>
    )
}