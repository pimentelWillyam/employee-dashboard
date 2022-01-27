import React from "react";
import {Link} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import StudentList from '../../components/StudentList';

function Dashboard() {
        return (
            <Container>
              <Header></Header>
              <StudentList></StudentList>
              <Footer></Footer>
            </Container>
        );
      }

export default Dashboard;