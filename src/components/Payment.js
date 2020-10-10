import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthAddress } from "../store/address/actions/addressAction";
import { Redirect } from "react-router-dom";
import { history } from "../history";
import { sendStkPush } from "../store/payment/actions/paymentAction";
import mpesa from "../assests/mpesa_xpress.png";
import { connect } from "react-redux";

const Payment = ({ cartTotal }) => {
  const currentState = useSelector((state) => state.Auth);
  const authID = currentState.currentUser.id;

  const addressSelector = useSelector((state) => state.Address);

  const dispatch = useDispatch();

  const getAuthAddress = (id) => dispatch(fetchAuthAddress(id));

  const sendPayment = (credentials) => dispatch(sendStkPush(credentials));

  const [payment, setPayment] = useState({
    party_a: "",
    amount: "",
  });

  const handleChange = (e) => {
    setPayment({
      ...payment,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendPayment({
      party_a: payment.party_a,
      amount: payment.amount,
    });
    history.push("");
  };

  useEffect(() => {
    getAuthAddress(authID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (addressSelector.authAddress.length === 0) {
    return <Redirect to="/checkout" />;
  }

  return (
    <div className="container">
      <h3>OnlineShoppingKenya</h3>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="row">
            {addressSelector.authAddress.map((address) => {
              return (
                <div
                  key={address.id}
                  className="card"
                  style={{ marginLeft: "20px", width: "530px" }}
                >
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Contact: {currentState.currentUser.email}
                    </li>
                    <li className="list-group-item">
                      Ship to: {address.address}, {address.city},
                      {address.country}, {address.postal_code}
                    </li>
                    <li className="list-group-item">Method: Free Shipping</li>
                  </ul>
                </div>
              );
            })}
          </div>
          <br />
          <form onSubmit={handleSubmit}>
            <h6>Payment</h6>
            <p>All transactions are secure and encrypted.</p>
            <img
              src={mpesa}
              width="50%"
              style={{ borderRadius: "10px" }}
              alt=""
            />
            <div className="card">
              <div className="card-header">M-Pesa Details</div>
              <br />
              <div className="container">
                <div className="form-group">
                  <input
                    type="text"
                    name="party_a"
                    onChange={handleChange}
                    className="form-control"
                    placeholder="For example: 254712345678"
                  />
                </div>
                <br />
                <div className="form-group">
                  <input
                    type="text"
                    name="amount"
                    value={cartTotal.totalPrice}
                    className="form-control"
                    placeholder="Amount"
                  />
                </div>
              </div>
            </div>
            <br />
            <button
              type="submit"
              className="btn btn-primary btn-lg btn-checkout"
            >
              Pay
            </button>
          </form>
          <br />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartTotal: state.Total.data
});

export default connect(mapStateToProps)(Payment);