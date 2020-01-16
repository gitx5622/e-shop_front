import React, {useEffect} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import {getProduct}  from "../store/products/actions/productsAction";
import PropTypes from "prop-types";
import {addProduct} from "../store/cart/cartAction/cartActions";
import '../css/ProductsDetails.css';

const ProductDetails = (props) => {

    const productID  = props.match.params.id;

    const currentState = useSelector(state => state);

    const product = currentState.Products.product;

    product.quantity = 1;

    const dispatch = useDispatch();

    const getProductsId = (id) => dispatch(getProduct(id));

    useEffect(()=>{
        getProductsId(productID);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


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
                    <div className="media">
                        <div className="col-md-6">
                            <div className=" details-image">
                            <img src={product.image_url_1} className="card-img-top mr-3"  alt="..."/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="media-body description">
                                <h3 className="mt-0">{product.title}</h3>
                                <h5>Allowed Discount:</h5>
                                <h5>{product.discout_price}%</h5><br/>
                                <h5 style={{textDecoration:"line-through"}}>Kshs{product.price}</h5><br/>
                               <h5>Kshs{product.price}</h5>
                                <p>{product.description}</p>
                                <button type="submit" className="btn btn-solid" name="subscribe"
                                        id="mc-embedded-subscribe"
                                        onClick={() => props.addProduct(product)}
                                        data-trans-key="general.newsletter_form.submit">Add to Cart
                                </button>
                                &emsp;&emsp;
                                <button type="submit" className="btn btn-solid" name="subscribe"
                                        id="mc-embedded-subscribe"
                                        data-trans-key="general.newsletter_form.submit">Buy Now
                                </button>
                            </div>
                            <br/>
                            <p>Please <a href="/">Contact Us</a> If You Are Interested In This Product.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductDetails.propTypes = {
    addProduct: PropTypes.func.isRequired
};


export default connect(null,{addProduct})(ProductDetails);