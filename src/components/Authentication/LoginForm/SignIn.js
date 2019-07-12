import React from 'react';
import "./SignIn.css";
import {history, checkLocalStorage} from "./../../Home/Home";


class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: ["admin", ""],
            password: [12345, ""],
            login: false          
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.signIn = this.signIn.bind(this)
    }

    handleUsernameChange(e) {
        if (this.state.username[0] === e.target.value) {
            this.setState((preventState) => ({username: [preventState.username[0], true]}))
        } else {
            this.setState((preventState) => ({username: [preventState.username[0], false]}))
        }
    }

    handlePasswordChange(e) {
        if (this.state.password[0] === +e.target.value) {
            this.setState((preventState) => ({password: [preventState.password[0], true]}))
        } else {
            this.setState((preventState) => ({password: [preventState.password[0], false]}))
        }
    }

    signIn() {
        console.log(history)
        if(!localStorage.getItem("isAutentificated")) {
        localStorage.setItem("isAutentificated", this.state.username[1] && this.state.password[1])
        if (checkLocalStorage()) {
            history.push("/login")
         }
        } else {
            localStorage.isAutentificated = this.state.username[1] && this.state.password[1];
            if (checkLocalStorage) {
            history.push("/login")
            }
        }
    }


    render() {
        return (
            <form>
                <div className="sign-in">
                <h2>Please sign in</h2>
                </div>
                <div className="form-group row sign-in">
                    <div className="col-sm-2 col-form-label">
                        <label className="" htmlFor="username">Username</label>
                    </div>
                    <div className="col-sm-4">
                        <input onChange={this.handleUsernameChange} className="form-control" id="username" type="text" placeholder="username" required autoFocus />
                    </div>
                </div>
                <div className="form-group row sign-in">
                    <div className="col-sm-2 col-form-label">
                        <label htmlFor="input-password">Password</label>
                    </div>
                    <div className="col-sm-4">
                        <input onChange={this.handlePasswordChange} className="form-control" type="password" id="input-password" placeholder="password" required />
                    </div>

                </div>
                <div className="row sign-in">
                    <div className="col-sm-6" >
                        <button onClick={this.signIn} type="button" className="btn-lg btn-primary btn-block"> Sign in</button>
                    </div>
                </div>

            </form>
        );
    }

}

export default SignIn;