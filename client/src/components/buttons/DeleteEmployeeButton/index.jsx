function deleteEmployee (){
    return (console.log("deleted employee"))
}

export default function DeleteEmployeeButton(){
    return (
        <Button id="create-employee-button" variant="danger"  onClick={deleteEmployee}> <i className="bi bi-gear-fill"></i> </Button>
    )
}