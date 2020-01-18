import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAuthAddress} from "../store/address/actions/addressAction";
import { Redirect } from 'react-router-dom';

const Payment = () => {

    const currentState = useSelector((state) => state.Auth);
    const authID = currentState.currentUser.id;

    const addressSelector = useSelector((state) => state.Address);
    const dispatch = useDispatch();

    const getAuthAddress = id => dispatch(fetchAuthAddress(id));

    useEffect(() => {
        getAuthAddress(authID);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (addressSelector.authAddress.length === 0 ) {
        return <Redirect to='/checkout' />
    }

    return (
            <div className="container">
                <h3>OnlineShoppingKenya</h3>
                <div className="row">
                    <div className="col">
                        <form>
                            <div className="row">
                                {addressSelector.authAddress.map(address => {
                                    return (
                                        <div key={address.id} className="card"
                                             style={{marginLeft: "20px", width: "530px"}}>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">Contact: {currentState.currentUser.email}</li>
                                                <li className="list-group-item">Ship
                                                    to: {address.address}, {address.city},
                                                    {address.country}, {address.postal_code}</li>
                                                <li className="list-group-item">Method: Free Shipping</li>
                                            </ul>
                                        </div>
                                    )
                                })}
                            </div>
                            <br/>
                            <h6>Payment</h6>
                            <p>All transactions are secure and encrypted.</p>
                            <div className="card">
                                <div className="card-header">
                                    Credit Card
                                </div>
                                <br/>
                                <div className="container">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Card number"/>
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Name on the card"/>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <div className="form-group">
                                                <input type="text" name="exp_date" className="form-control"
                                                       placeholder="Expiration Date(MM/YY)"/>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <input type="text" name="security_code" className="form-control"
                                                       placeholder="Security Code"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <button type="submit" className="btn btn-primary btn-lg btn-checkout">Pay</button>
                        </form>
                        <br/>
                    </div>
                    <div className="col">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="row">
                                        <div className="col">
                                            <ul className="checkout">
                                                <li>Image</li>
                                                <li>Title</li>
                                                <li>Total</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col">
                                            <p>Subtotal</p>
                                            <p>Shipping</p>
                                        </div>
                                        <div className="col">
                                            <p>Subtotal</p>
                                            <p>Free Shipping</p>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col">
                                            <p>Total</p>
                                        </div>
                                        <div className="col">
                                            <h4>Kshs <strong>2,000</strong></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
};

export default Payment;