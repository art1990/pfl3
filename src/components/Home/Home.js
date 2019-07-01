import React from 'react';
import './Home.css';
import Profile from "./../Profile/Profile";
import Login from "./../Authentication/Login";

function Home() {
  return (
    <div className="home">
        <div>Home</div>
        <Profile />
        <Login />
    </div>
  );
}

export default Home;
