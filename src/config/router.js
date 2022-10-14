import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Work from "../screen/work";
import About from "../screen/about";
import Dashboard from "../screen/dashboard";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            {/* <li>
              <Link to="/dashboard">Dashboard</Link>
            </li> */}
          </ul>
        </nav>

      
          <Routes>
          <Route path="/about" element={<About/>}>
           
           </Route>
           <Route path="/work" element={<Work/>}>
           </Route>
           <Route path="/dashboard/*" element={<Dashboard/>}>
           </Route>
         
          </Routes>
      </div>
    </Router>
  );
}