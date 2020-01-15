import React, {useEffect} from 'react';
import {Row,Col} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getProduct}  from "../store/products/actions/productsAction";


const ProductDetails = (props) => {

    const productID  = props.match.params.id;

    const currentState = useSelector(state => state);

    const product = currentState.ProductsState.product;

    const dispatch = useDispatch();

    const getProductsId = (id) => dispatch(getProduct(id));

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
                    <Row>
                        <div className="media">
                            <Col span={12} className="details-image">
                            <img src={product.image_url_1} className="card-img-top mr-3"  alt="..."/>
                            </Col>
                            <Col span={12}>
                                <div className="media-body">
                                    <h3 className="mt-0">Media heading</h3>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
                                    faucibus.
                                </div>
                            </Col>
                        </div>
                    </Row>
                </div>
            </div>
        );
};

export default ProductDetails;