import {Button} from 'react-bootstrap'

function updateEmployee(){
    return(console.log("employee updated"))
}

export default function UpdateEmployeeButton(){
    return (
        <Button id="update-employee-button" variant="Warning"  onClick={updateEmployee}> <i class="bi bi-gear-fill"></i> </Button>
    )
}