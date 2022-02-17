import Dashboard from './pages/DashboardPage'
import CreateEmployee from './pages/CreateEmployeePage'
import UpdateEmployee from './pages/UpdateEmployeePage'


import { BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default function AppRoutes () {
    return (
        <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Dashboard/>}/>
          <Route path = "/create-employee" element = {<CreateEmployee/>}/>
          <Route path = "/update-employee/:id" element = {<UpdateEmployee/>}>
            <Route path = ""></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    )
}