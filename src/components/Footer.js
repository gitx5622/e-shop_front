import React, {useState} from 'react';
import { Row, Col } from 'shards-react';
import '../css/Footer.css';
import logo from '../assests/logo.png';
import {useDispatch, useSelector} from "react-redux";
import {emailSubscribe} from "../store/subscribe/actions/subscribeAction";

const Footer = () => {

    const currentState = useSelector(state => state);

    const [subscribe, setSubscribe] = useState({email:''});
    const dispatch = useDispatch();

    const subscribed = (email) => dispatch(emailSubscribe(email));

    const handleChange = e => {
        setSubscribe({
            ...subscribe,
            [e.target.name]: e.target.value
        })
    };
    const submitUser = (e) => {
        e.preventDefault();
        subscribed({email:subscribe.email});
    };

    //Tawk.to
        (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/5e131d1a7e39ea1242a339d9/default';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
        })();
        return (
            <div>
                <footer className="sticky-bottom">
                <div className="row" style={{background:"whitesmoke"}}>
                        <div className="container">
                            <div className="subscribe">
                            <center>
                            {/* <h3><Icon type="message"  theme="twoTone" twoToneColor="#ff7a45" /> NEWSLETTER</h3> */}
                                { currentState.Subscribe.error && currentState.Subscribe.error.Required_email ? (
                                    <p className="text-danger">{currentState.Subscribe.error.Required_email}</p>
                                ) : (
                                    ""
                                )}
                                { currentState.Subscribe.error && currentState.Subscribe.error.Invalid_email ? (
                                    <p className="text-danger">{currentState.Subscribe.error.Invalid_email}</p>
                                ) : (
                                    ""
                                )}
                                { currentState.Subscribe.error && currentState.Subscribe.error.Taken_email ? (
                                    <p className="text-danger">{currentState.Subscribe.error.Taken_email}</p>
                                ) : (
                                    ""
                                )}
                            <form onSubmit={submitUser} className="validate form-inline subscribe-form">
                                <input type="email" className="required email form-control" name="email"
                                                onChange={handleChange}
                                               placeholder="Enter Your Email" id="mce-EMAIL" required=""/>&nbsp; &nbsp;
                                    <button type="submit" className="btn btn-solid" name="subscribe"
                                            id="mc-embedded-subscribe"
                                            data-trans-key="general.newsletter_form.submit">Subscribe
                                    </button>
                            </form>
                            </center>
                        </div>
                     <hr/>
                    <Row>
                        <div className="grid-footer">
                        <Col span={6} className="footer-logo">
                            <img src={logo} alt="logo" width="220px" height="100px"/><br/><br/>
                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                            <ul className="social-icons">
                                <li><i className="fa fa-facebook" aria-hidden="true"/></li>
                                <li><i className="fa fa-google-plus" aria-hidden="true"/></li>
                                <li><i className="fa fa-twitter" aria-hidden="true"/></li>
                                <li><i className="fa fa-instagram" aria-hidden="true"/></li>
                            </ul>
                        </Col>
                        <Col span={6} className="links">
                            <h6><strong>LINKS</strong></h6>
                            <ul>
                                <li><a href="/" style={{color: "#c0c0c0"}} className="lang_trans"
                                       data-trans="#footer1_shipping-delivery">
                                    Shipping &amp; Delivery
                                </a></li>
                                <li>Faq</li>
                                <li>Returns & Exchanges</li>
                                <li>Shipping & Delivery</li>
                                <li>Terms & Conditions</li>
                                <li>Orders</li>
                            </ul>

                        </Col>
                        <Col span={6} className="category">
                            <h6><strong>CATEGORY</strong></h6>
                            <ul>
                                <li>Casual Pants</li>
                                <li>T-shirt</li>
                                <li>Shirts</li>
                                <li>Sport Wear</li>
                                <li>Ethnic Wear</li>
                                <li>Men Hoodie</li>
                            </ul>
                        </Col>
                        <Col span={6} className="store-info">
                            <h6><strong>STORE INFO</strong></h6>
                            <ul>
                                <li>Fiot Fashion Demo Store Demo Store USA</li>
                                <li>Call Us: +254741790736</li>
                                <li>Email Us: Support@E-Shop.Co.ke</li>
                                <li>Fax: 123456</li>
                            </ul>
                        </Col>
                        </div>
                    </Row>
                </div>
                </div>
                <div className="row d-none d-md-block">
                    <div className="container">
                        <div className="bottom-footer">
                            <ul>
                                <li style={{float:"left"}}><strong>2019 - 20 Powered by E-Shop</strong></li>
                                <li style={{float:"right"}}><i className="fa fa-cc-visa fa-2x" aria-hidden="true"/> </li>
                                <li style={{float:"right"}}><i className="fa fa-cc-mastercard fa-2x" aria-hidden="true"/> </li>
                                <li style={{float:"right"}}><i className="fa fa-paypal fa-2x" aria-hidden="true"/></li>
                                <li style={{float:"right"}}><i className="fa fa-cc-stripe fa-2x" aria-hidden="true"/></li>
                                <li style={{float:"right"}}><i className="fa fa-cc-discover fa-2x" aria-hidden="true"/></li>
                            </ul>
                        </div>

                    </div>

                </div>
                </footer>
            </div>
        );
    };


export default Footer;