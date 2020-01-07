import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {SignIn} from "../store/auth/actions/authActions";
import {Redirect} from 'react-router-dom';
import '../css/Login.css';

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
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" name="email" onChange={handleChange}
                                       aria-describedby="emailHelp"/>

                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password"  name="password" className="form-control" onChange={handleChange}/>
                            </div>
                            <button type="submit" className="btn btn-solid" name="login"
                                    data-trans-key="general.newsletter_form.submit">Login
                            </button>
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
                        <button type="submit" className="btn btn-solid" name="create"
                                data-trans-key="general.newsletter_form.submit">Create
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Login