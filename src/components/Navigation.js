import React, {useEffect} from "react";
import '../css/Navigation.css';
import {Menu, Dropdown, Icon, Input} from 'antd';
import logo from "../assests/logo.png";
import { useSelector, useDispatch } from "react-redux";
import {SignOut} from "../store/auth/actions/authActions";
import {fetchProducts} from "../store/products/actions/productsAction";
import SearchBar from "./SearchBar";


const Navigation = () => {

    const currentState = useSelector((state) => state);

    const { isAuthenticated } = currentState.Auth;

    const dispatch = useDispatch();

    const logoutUser  = () => dispatch(SignOut());

    const logout = (e) => {
        e.preventDefault();
        logoutUser()
    };

    const products = currentState.Products.products;

    const getProducts = () => dispatch(fetchProducts());

    useEffect(()=>{
        getProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

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
                                <Dropdown overlay={ isAuthenticated ? SignedOutLinks: SignedInLinks }><a className="ant-dropdown-link">My Account<Icon type="down" /></a></Dropdown></li>
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
                            <SearchBar/>
                        </div>
                        <div className="basket d-block d-md-none">
                            <ul>
                                <li>
                                    <Dropdown overlay={ isAuthenticated ? SignedOutLinks: SignedInLinks }>
                                        <a className="ant-dropdown-link">
                                            <i className="fa fa-user fa-2x" aria-hidden="true"/>
                                        </a></Dropdown>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

};

export default Navigation;