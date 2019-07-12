import React from 'react';
import './Home.css';
import Profile from "../Content/Profile/Profile";
import {News} from "../Content/News/News";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
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
        super(props)


    }

    render() {
        return (

            <Router history={history}>
                <div style={{color: "black", height: "300px", backgroundColor: "grey", fontSize: "25px"}}>
                    <Route path="/" component={Home} />
                    <Route path="/news" component={News}/>
                    <Route path="/profile" render={() => {
                        if (checkLocalStorage()) {
                            return <Profile />
                        } else {
                            return <SignIn />
                        }                                              
                    }} />
                    <Route path="/login" render={() => {
                         if (checkLocalStorage()) {
                            return <Redirect to="/profile" />
                        } 
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
        </div>
    );
}


export default AppRouter;
