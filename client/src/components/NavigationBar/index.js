import React from "react";
import {Container} from 'react-bootstrap/';
import {Link} from 'react-router-dom';

function NavigationBar() {
        return (
			<Container>
				<Link to="/home"><h1>Home</h1></Link>
				<Link to="/signup"><h1>Sign up</h1></Link>
				<Link to="/login"><h1>Login</h1></Link>
			</Container>

        );
      }
      export default NavigationBar;