import Dashboard from './pages/Dashboard'
import UpdateEmployee from './pages/UpdateEmployee'


import { BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default function AppRoutes () {
    return (
        <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Dashboard/>}/>
          <Route path = "/update-employee" element = {<UpdateEmployee/>}/>
        </Routes>
      </BrowserRouter>
    )
}