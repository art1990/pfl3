import React from 'react';
import "./SignIn.css";


class SignIn extends React.Component{

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
                        <input className="form-control" id="username" type="text" placeholder="username" required autoFocus />
                    </div>
                </div>
                <div className="form-group row sign-in">
                    <div className="col-sm-2 col-form-label">
                        <label htmlFor="input-password">Password</label>
                    </div>
                    <div className="col-sm-4">
                        <input className="form-control" type="password" id="input-password" placeholder="password" required />
                    </div>

                </div>
                <div className="row sign-in">
                    <div className="col-sm-6" >
                        <button type="button" className="btn-lg btn-primary btn-block"> Sign in</button>
                    </div>
                </div>

            </form>
        );
    }

}

export default SignIn;