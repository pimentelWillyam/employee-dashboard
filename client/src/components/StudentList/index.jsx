import Table from 'react-bootstrap/Table';

import InsertStudentButton from '../../components/InsertStudentButton'

function StudentList(){
    return(
        
        <Table striped hover id="student-list">
        <thead>
            <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>E-mail</th>
            <th><InsertStudentButton></InsertStudentButton></th>
            </tr>
        </thead>
        <tbody>
        </tbody>

    </Table>
    );
}

export default StudentList