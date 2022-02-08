import React from "react";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import NewUser from './pages/NewUser';
import UpdateUser from "./pages/UpdateUser";


function App() {
  return (
	<Router>
		<Routes>
			<Route path="/" element={<Dashboard/>} />
			<Route path="/new-user" element={<NewUser/>}/>
			<Route path="/update-user" element={<UpdateUser/>} />
		</Routes>
	</Router>

	
  );
}

export default App;
