import React from 'react';
import './Home.css';
import Profile from "./../Profile/Profile";
import Login from "./../Authentication/Login";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";


function AppRouter() {
  return (
    
    <Router>
    <div className="home">
    <Route path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/profile" component={Profile} />

    </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home-router">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
    </div>
  );
}




export default AppRouter;
