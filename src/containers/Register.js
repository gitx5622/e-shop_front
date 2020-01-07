import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {SignUp} from "../store/auth/actions/authActions";
import {Redirect} from 'react-router-dom';
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
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="LastName" data-trans-key="customer.register.last_name">Last
                                        Name</label>
                                    <input type="text" className="form-control" name="customer[last_name]" id="LastName"
                                           placeholder="Last Name"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-6">
                                    <label htmlFor="email" data-trans-key="customer.register.email">Email</label>
                                    <input type="email" name="email" id="Email" placeholder="Email"
                                           className="form-control " onChange={handleChange} autoCorrect="off" autoCapitalize="off"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="review" data-trans-key="customer.register.password">Password</label>
                                    <input type="password" name="password" placeholder="Password"
                                           id="CreatePassword" onChange={handleChange} className="form-control "/>
                                </div><br/>
                                <div>
                                <button className="btn btn-solid" data-trans-key="customer.register.submit">Create
                                </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Register