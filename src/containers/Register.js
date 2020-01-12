import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {SignUp} from "../store/auth/actions/authActions";
import {Redirect, Link} from 'react-router-dom';
import '../css/Register.css';

const Register = () => {

    const currentState = useSelector((state)=> state.Auth);

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
    });
    const dispatch = useDispatch();

    const addUser = (credentials) => dispatch(SignUp(credentials));

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })

    };

    const handleSubmit = e => {
        e.preventDefault();
        addUser({
            username: user.username,
            email: user.email,
            password: user.password
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
                        <h3><strong>REGISTER</strong></h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="col-md-6">
                                    <label htmlFor="FirstName" data-trans-key="customer.register.first_name">User
                                        Name</label>
                                    <input type="text" className="form-control" name="username"
                                           placeholder="UserName" id="FirstName" autoFocus="" onChange={handleChange}/>
                                    { currentState.signupError && currentState.signupError.Required_username ? (
                                        <p className="text-danger">{currentState.signupError.Required_username}</p>
                                    ) : (
                                        ""
                                    )}
                                    { currentState.signupError && currentState.signupError.Taken_username ? (
                                        <p className="text-danger">{ currentState.signupError.Taken_username }</p>
                                    ) : (
                                        ""
                                    )}
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="FullName">Full Name</label>
                                    <input type="text" className="form-control" name="customer[full_name]" id="FullName"
                                           placeholder="Full Name"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-6">
                                    <label htmlFor="email" data-trans-key="customer.register.email">Email</label>
                                    <input type="email" name="email" id="Email" placeholder="Email"
                                           className="form-control " onChange={handleChange} autoCorrect="off" autoCapitalize="off"/>
                                    { currentState.signupError && currentState.signupError.Required_email ? (
                                        <p className="text-danger">{currentState.signupError.Required_email}</p>
                                    ) : (
                                        ""
                                    )}
                                    { currentState.signupError && currentState.signupError.Invalid_email ? (
                                        <p className="text-danger">{ currentState.signupError.Invalid_email }</p>
                                    ) : (
                                        ""
                                    )}
                                    { currentState.signupError && currentState.signupError.Taken_email ? (
                                        <p className="text-danger">{ currentState.signupError.Taken_email }</p>
                                    ) : (
                                        ""
                                    )}
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="review" data-trans-key="customer.register.password">Password</label>
                                    <input type="password" name="password" placeholder="Password"
                                           id="CreatePassword" onChange={handleChange} className="form-control "/>
                                    { currentState.signupError && currentState.signupError.Required_password ? (
                                        <p className="text-danger">{ currentState.signupError.Required_password }</p>
                                    ) : (
                                        ""
                                    )}
                                    { currentState.signupError && currentState.signupError.Invalid_password ? (
                                        <p className="text-danger">{ currentState.signupError.Invalid_password }</p>
                                    ) : (
                                        ""
                                    )}
                                </div><br/>
                                <div className="p-3">
                                    { currentState.isLoading ? (
                                <button className="btn btn-solid" data-trans-key="customer.register.submit">Registering...
                                </button>
                                ):(
                                <button className="btn btn-solid" data-trans-key="customer.register.submit">Create
                                </button>
                                )}
                                </div>
                            </div>
                        </form>
                        <div className="mt-2">
                            <small>Have an account? <Link to="/login">Please login</Link></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Register