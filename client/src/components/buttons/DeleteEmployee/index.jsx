function deleteEmployee (){
    return (console.log("deleted employee"))
}

export default function DeleteEmployee(){
    return (
        <Button id="create-employee-button" variant="danger"  onClick={deleteEmployee}> <i class="bi bi-gear-fill"></i> </Button>
    )
}