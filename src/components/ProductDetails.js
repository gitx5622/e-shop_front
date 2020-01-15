import React, {useEffect} from 'react';
import {Row,Col} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getProduct}  from "../store/products/actions/productsAction";


const ProductDetails = (props) => {

    const productID  = props.match.params.id;

    const currentState = useSelector(state => state);

    const product = currentState.ProductsState.product;

    const dispatchx = useDispatch();

    const getProductsId = (id) => dispatchx(getProduct(id));

    useEffect(()=>{
        getProductsId(productID);
    }, []);


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
                        <div className="col-md-6 details-image">
                            <img src={product.image_url_1} className="card-img-top mr-3"  alt="..."/>
                        </div>
                        <div className="col-md-6">
                            <div className="media-body">
                                <h3 className="mt-0">{product.title}</h3>
                                <span style={{textDecoration:"line-through"}}>{product.discout_price}</span>
                               <span>{product.price}</span>
                                <p><pre>{product.description}</pre></p>
                                <button type="submit" className="btn btn-solid" name="subscribe"
                                        id="mc-embedded-subscribe"
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

export default ProductDetails;