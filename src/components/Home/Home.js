import React from 'react';
import './Home.css';
import Profile from "../Content/Profile/Profile";
import {News} from "../Content/News/News";
import {Router as Router, Route, Redirect} from "react-router-dom";
import { createBrowserHistory } from 'history';
import Header from "../Header";
import SignIn from "./../Authentication/LoginForm/SignIn"
import { logicalExpression } from '@babel/types';



export const history = createBrowserHistory();

export const checkLocalStorage = () => {
    try {
        if(JSON.parse(localStorage.isAutentificated)) {
            return true
        } 
    } catch {
        return false
    } return false;
}

class AppRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={history}>
                <div style={{color: "black", height: "400px", backgroundColor: "grey", fontSize: "25px"}}>
                    <Route path="/" component={Home} />
                    <Route path="/news" component={News}/>
                    <Route path="/profile" render={() => {
                        if (checkLocalStorage()) {
                            return <Profile  />
                        } else {
                            return <Redirect to={"/login"} />
                        }                                              
                    }} />
                    <Route path="/login" render={() => {
                            return <SignIn />
                    }} />
                </div>
            </Router>
        );
    }
}


function Home() {
    return (
        <div className="home">
            <Header/>
            <div id="nav">
                <div className="menu-item">
                    item1
                    <div className="sub-menu">sub</div>
                </div>
                <div className="menu-item">
                    item2
                    <div className="sub-menu">sub</div>
                </div>
                <div className="menu-item">
                    item3
                    <div className="sub-menu">sub</div>
                </div>
            </div>

        </div>
    );
}



window.onload = () => {document.getElementById("nav").onmouseover = (e) => {
    const target = e.target;
    if (target.className === "menu-item") {
        const sub = target.getElementsByClassName("sub-menu");
        closeMenu();
        sub[0].style.display = "block"
    }

    document.onmouseover = (e) => {
        let target = e.target;
        if (target.className !== "menu-item" && target.className !== "sub-menu") {
            closeMenu()
        }
    }


}};


const closeMenu = () => {
    const subm = document.getElementsByClassName("sub-menu");
    for (let i = 0; i < subm.length; i++) {
        subm[i].style.display = "none";
    }
}

export default AppRouter;
