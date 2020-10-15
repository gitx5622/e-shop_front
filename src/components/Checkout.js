import React, { useEffect, useState } from "react";
import "../css/Checkout.css";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../history";
import {
  addressCreate,
  fetchAuthAddress,
} from "../store/address/actions/addressAction";
import { Redirect } from "react-router-dom";

const Checkout = () => {
  const authSelector = useSelector((state) => state.Auth);
  const currentState = useSelector((state) => state);

  const authID = authSelector.currentUser.id;

  const addressSelector = useSelector((state) => state.Address);

  const getAuthAddress = (id) => dispatch(fetchAuthAddress(id));

  const dispatch = useDispatch();

  const createAddress = (addressDetails) =>
    dispatch(addressCreate(addressDetails));

  const [address, setAddress] = useState({
    first_name: "",
    last_name: "",
    address: "",
    city: "",
    country: "Kenya",
    postal_code: "00200",
  });

  useEffect(() => {
    getAuthAddress(authID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createAddress({
      first_name: address.last_name,
      last_name: address.last_name,
      address: address.address,
      city: address.city,
      country: address.country,
      postal_code: address.postal_code,
    });
    history.push("/payment");
  };

  if (addressSelector.authAddress.length > 0) {
    return <Redirect to="/payment" />;
  }

  return (
    <div className="container">
      <h3>OnlineShoppingKenya</h3>
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label>First Name</label>
                  {currentState.Address.error &&
                  currentState.Address.error.Required_firstname ? (
                    <p className="text-danger">
                      {currentState.Address.error.Required_firstname}
                    </p>
                  ) : (
                    ""
                  )}
                  <input
                    type="text"
                    name="first_name"
                    onChange={handleChange}
                    className="form-control"
                    placeholder="First name"
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label>Last Name</label>
                  {currentState.Address.error &&
                  currentState.Address.error.Required_lastname ? (
                    <p className="text-danger">
                      {currentState.Address.error.Required_lastname}
                    </p>
                  ) : (
                    ""
                  )}
                  <input
                    type="text"
                    name="last_name"
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Last name"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Address</label>
              {currentState.Address.error &&
              currentState.Address.error.Required_address ? (
                <p className="text-danger">
                  {currentState.Address.error.Required_address}
                </p>
              ) : (
                ""
              )}
              {currentState.Address.error &&
              currentState.Address.error.Taken_address ? (
                <p className="text-danger">
                  {currentState.Address.error.Taken_address}
                </p>
              ) : (
                ""
              )}
              <input
                type="text"
                name="address"
                onChange={handleChange}
                className="form-control"
                placeholder="Address"
              />
            </div>
            <div className="form-group">
              <label>City</label>
              {currentState.Address.error &&
              currentState.Address.error.Required_city ? (
                <p className="text-danger">
                  {currentState.Address.error.Required_city}
                </p>
              ) : (
                ""
              )}
              <input
                type="text"
                name="city"
                onChange={handleChange}
                className="form-control"
                placeholder="City"
              />
            </div>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label>Country</label>
                  <input
                    type="text"
                    name="country"
                    onChange={handleChange}
                    disabled={address.country}
                    className="form-control"
                    placeholder="Kenya"
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label>Postal Code</label>
                  <input
                    type="text"
                    name="postal_code"
                    onChange={handleChange}
                    disabled={address.postal_code}
                    className="form-control"
                    placeholder="00200"
                  />
                </div>
              </div>
            </div>
            <button type="submit"
              className="btn btn-primary btn-lg btn-checkout"
            >
              Continue to payment
            </button>
          </form>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
