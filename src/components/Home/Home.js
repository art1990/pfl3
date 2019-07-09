import React from 'react';
import './Home.css';
import Profile from "../Content/Profile/Profile";
import {News} from "../Content/News/News";
import {BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
import Header from "../Header";



class AppRouter extends React.Component {
    constructor(props) {
        super(props)


    }

    render() {
        return (

            <Router>
                <div style={{color: "black", height: "300px", backgroundColor: "grey"}}>
                    <Route path="/" component={Home} />
                    <Route path="/news" component={News}/>
                    <Route path="/profile" component={Profile}/>
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
