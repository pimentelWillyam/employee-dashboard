import './style.css'

import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function createEmployee(){
    return (console.log("created"))
}

export default function CreateEmployeeButton(){
    return (
        <Link to="/"> <Button id="create-employee-button" variant="success"  onClick={createEmployee}> Create </Button> </Link>
    )
}