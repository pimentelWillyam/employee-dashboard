

import {Table} from '../react-bootstrap'

function StudentList(){
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

export default StudentList