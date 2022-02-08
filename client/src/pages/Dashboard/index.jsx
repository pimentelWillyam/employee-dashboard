import React from "react";
import {Link} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Footer from '../../components/Footer';
import StudentList from '../../components/StudentList';


function Dashboard() {
        return (
          <Container>
            <StudentList></StudentList>
            <Footer></Footer>
            
          </Container>          
        );
      }

export default Dashboard;