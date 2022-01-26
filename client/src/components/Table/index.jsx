import {Table} from '../react-bootstrap'

function Table(){
    return(
        <Table striped hover>
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>E-mail</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </Table>
    );
}