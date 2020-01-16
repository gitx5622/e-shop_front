import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {SignIn} from "../store/auth/actions/authActions";
import {Redirect, Link} from 'react-router-dom';
import '../css/Login.css';
import {Alert} from "antd";

const Login = () => {

    const currentState = useSelector((state)=> state.Auth);

    const [user, setUser] = useState({
        email: '',
        password: '',
    });
     const dispatch = useDispatch();

     const userLogin = (credentials) => dispatch(SignIn(credentials));

     const handleChange = e => {
         setUser({
             ...user,
             [e.target.name]: e.target.value,
         })

     };

     const handleSubmit = e => {
         e.preventDefault();
         userLogin({
             email: user.email,
             password: user.password,
         })
     };

    if(currentState.isAuthenticated){
        return <Redirect to='/' />
    }
    return (
        <div>
            <div className="row" style={{background:"whitesmoke"}}>
                <div className="container">
                <div className="accounts">
                    <ul>
                        <li style={{float:"left"}}><strong>ACCOUNT</strong></li>
                        <li style={{float:"right"}}><a href="/">HOME</a>&nbsp; &nbsp;<strong>/  ACCOUNT</strong></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="container" style={{marginTop:"50px",marginBottom:"50px"}}>
                <div className="row">
                    <div className="col-sm">
                        <h3><strong>LOGIN</strong></h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-2">
                                { currentState.loginError && currentState.loginError.Incorrect_details ? (
                                    <Alert message={currentState.loginError.Incorrect_details} type="error" />
                                ) : (
                                    ""
                                )}
                                { currentState.loginError && currentState.loginError.No_record ? (
                                    <Alert message={currentState.loginError.No_record} type="error" />
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" name="email" onChange={handleChange}/>
                                { currentState.loginError && currentState.loginError.Required_email ? (

                                    <p className="text-danger">{currentState.loginError.Required_email}</p>
                                ) : (
                                    ""
                                )}
                                { currentState.loginError && currentState.loginError.Invalid_email ? (
                                    <p className="text-danger">{ currentState.loginError.Invalid_email }</p>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password"  name="password" className="form-control" onChange={handleChange}/>
                                { currentState.loginError && currentState.loginError.Required_password ? (
                                    <p className="text-danger">{ currentState.loginError.Required_password }</p>
                                ) : (
                                    ""
                                )}
                                { currentState.loginError && currentState.loginError.Invalid_password ? (
                                    <p className="text-danger">{ currentState.loginError.Invalid_password }</p>
                                ) : (
                                    ""
                                )}
                                { currentState.loginError && currentState.loginError.Incorrect_password ? (
                                    <p className="text-danger">{ currentState.loginError.Incorrect_password }</p>
                                ) : (
                                    ""
                                )}
                            </div>
                            {currentState.isLoading ? (
                                <button type="submit" className="btn btn-solid" name="login"
                                        data-trans-key="general.newsletter_form.submit">Loading ...
                                </button>
                            ) : (
                                <button type="submit" className="btn btn-solid" name="login"
                                        data-trans-key="general.newsletter_form.submit">Login
                                </button>
                            )}

                        </form>
                        <a href="/forgotpassword" style={{color:"#ff7a45"}}>Forgot Your Password?</a>
                    </div>
                    <div className="col-sm">
                        <h3><strong>NEW CUSTOMER</strong></h3>
                        <h6>CREATE ACCOUNT</h6>
                        <p>
                            Sign Up For A Free Account At Our Store.
                            Registration Is Quick And Easy. It Allows You To Be Able To Order From Our Shop.
                            To Start Shopping Click Register.</p>
                        <Link to="/register">
                        <button type="submit" className="btn btn-solid" name="create"
                                data-trans-key="general.newsletter_form.submit">Create
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Login