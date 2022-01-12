import React from "react";

import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'

import {Container} from 'react-bootstrap'

import Dashboard from './pages/Home'
import NewUser from './pages/NewUser';
import UpdateUser from "./pages/UpdateUser";

import NavigationBar from './components/NavigationBar'


function App() {
  return (
	<Container>
		<Router>
			<Routes>
				<Route path="/" element={<Dashboard/>} />
				<Route path="/new-user" element={<NewUser/>}/>
				<Route path="/update-user" element={<UpdateUser/>} />
			</Routes>
		</Router>
	</Container>

	
  );
}

export default App;
