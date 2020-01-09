import React from "react";
import '../css/Navigation.css';
import {Menu, Dropdown, Icon, Badge} from 'antd';
import logo from "../assests/logo.png";
import { useSelector, useDispatch } from "react-redux";
import {SignOut} from "../store/auth/actions/authActions";

const Navigation = () => {

    const currentState = useSelector((state) => state);

    const { isAuthenticated } = currentState.Auth;

    const dispatch = useDispatch();

    const logoutUser  = () => dispatch(SignOut());

    const logout = (e) => {
        e.preventDefault();
        logoutUser()
    };
    const SignedInLinks = (
        <Menu>
            <Menu.Item>
                <a href="/login">
                    Login
                </a>
            </Menu.Item>
            <Menu.Item>
                <a href="/register">
                    Register
                </a>
            </Menu.Item>
        </Menu>
    );
    const SignedOutLinks = (
        <Menu>
            <Menu.Item>
                <a onClick={logout}>Logout</a>
            </Menu.Item>
        </Menu>
    );


    return (
        <div>
                <div className="row" style={{background:"#ff7a45"}}>
                    <div className="container">
                        <ul className='top-header'>
                            <li> Announce something here &nbsp; &nbsp; &nbsp; <i className="fa fa-phone" aria-hidden="true"/>&nbsp; CALL US: 123-456-7890</li>
                            <li style={{float:"right", textDecoration:"none"}}><i className="fa fa-user" aria-hidden="true"/>&nbsp;
                                <Dropdown overlay={ isAuthenticated ? SignedOutLinks: SignedInLinks }><a className="ant-dropdown-link" href="#">My Account<Icon type="down" /></a></Dropdown></li>
                            <li style={{float:"right"}}><i className="fa fa-heart" aria-hidden="true"/>&nbsp; Wishlist </li>

                        </ul>
                    </div>
                </div>
            <div className="container">
                <div className="row logo-basket p-4">
                    <div className="col">
                        <ul>
                            <li><a href="/"><img src={logo} alt="logo" width="80px" height="40px"/></a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <div className="basket d-none d-md-block">
                            <ul>
                                <li><i className="fa fa-user fa-2x" aria-hidden="true"/></li>
                                <li><i className="fa fa-shopping-basket fa-2x" aria-hidden="true"/> <a href="/">
                                    <Badge count={5}>
                                        <span className="head-example" />
                                    </Badge>
                                </a></li>
                                <li>BLOG</li>
                                <li>PAGES</li>
                                <li>SHOP</li>
                                <li>HOME</li>
                            </ul>
                        </div>
                        <div className="basket d-block d-md-none">
                            <ul>
                                <li><i className="fa fa-user fa-2x" aria-hidden="true"/></li>
                                <li><i className="fa fa-shopping-basket fa-2x" aria-hidden="true"/> <a href="/">
                                    <Badge count={5}>
                                        <span className="head-example" />
                                    </Badge>
                                </a></li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

};

export default Navigation;