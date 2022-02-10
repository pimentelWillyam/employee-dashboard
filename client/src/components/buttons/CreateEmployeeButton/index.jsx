import './style.css'

import {Button} from 'react-bootstrap'

function createEmployee(){
    return (console.log("created"))
}

export default function CreateEmployeeButton(){
    return (
        <Button id="create-employee-button" variant="success"  onClick={createEmployee}> Create </Button>
    )
}