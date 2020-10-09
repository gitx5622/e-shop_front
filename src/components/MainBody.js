import React, { useEffect } from "react";
import Slider from "./Slider";
import { Col } from "antd";
import delivery from "../assests/delivery.png";
import daily from "../assests/daily.png";
import festival from "../assests/festival.png";
import back3 from "../assests/back3.jpg";
import "../css/MainBody.css";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/products/actions/productsAction";
import { addProduct } from "../store/cart/cartAction/cartActions";
import { history } from "../history";
import PropTypes from "prop-types";
import { formatPrice } from "../utils";

const MainBody = (props) => {
  const currentState = useSelector((state) => state);

  const products = currentState.Products.products;

  const dispatch = useDispatch();

  const getProducts = () => dispatch(fetchProducts());

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="row">
        <div className="corousel">
          <Slider />
        </div>
        <div className="container">
          <div
            className="row p-5"
            style={{
              zIndex: "1000px",
              position: "relative",
              background: "#fafafa",
              marginTop: "-100px",
              border: "1px",
            }}
          >
            <div className="col-sm">
              <Col span={5}>
                <img src={delivery} alt="delivery" />
              </Col>
              <Col span={19}>
                <h4>FREE SHIPPING</h4>
                <p>Free Shipping World Wide</p>
              </Col>
            </div>
            <div className="col-sm">
              <Col span={5}>
                <img src={daily} alt="daily" />
              </Col>
              <Col span={19}>
                <h4>24 X 7 SERVICE</h4>
                <p>Online Service For New Customer</p>
              </Col>
            </div>
            <div className="col-sm">
              <Col span={5}>
                <img src={festival} alt="festival" />
              </Col>
              <Col span={19}>
                <h4>FESTIVAL OFFER</h4>
                <p>New Online Special Festival Offer</p>
              </Col>
            </div>
          </div>
        </div>
      </div>
      <div
        className="back3 d-none d-md-block"
        style={{
          backgroundImage: `url(${back3})`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="row" style={{ background: "white" }}>
          <div
            className="container"
            style={{ background: "white", zIndex: "1000px" }}
          >
            <center>
              <h1 style={{ fontFamily: "Roboto" }}>Product List</h1>
            </center>
            <div className="row" style={{ marginTop: "20px" }}>
              {products.slice(4, 8).map((product) => {
                return (
                  <div key={product.id} className="col-md-3 sm-6">
                    <div className="product-grid4">
                      <div className="product-image4">
                        <a
                          href
                          onClick={() => history.push(`product/${product.id}/`)}
                        >
                          <img
                            className="pic-1"
                            src={product.image_url_1}
                            alt="#"
                          />
                          <img
                            className="pic-2"
                            src={product.image_url_2}
                            alt="#"
                          />
                        </a>
                        <ul className="social">
                          <li>
                            <a
                              href
                              data-tip="View Product"
                              onClick={() =>
                                history.push(`product/${product.id}/`)
                              }
                              producta-tip="Quick View"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </li>
                          <li>
                            <a href data-tip="Add to Wishlist">
                              <i className="fa fa-shopping-bag" />
                            </a>
                          </li>
                          <li>
                            <a href data-tip="Add to Cart">
                              <i className="fa fa-shopping-cart" />
                            </a>
                          </li>
                        </ul>
                        <span className="product-new-label">New</span>
                        <span className="product-discount-label">
                          {product.discout_price}%
                        </span>
                      </div>
                      <div className="product-content">
                        <h3 className="title">
                          <a
                            href
                            onClick={() =>
                              history.push(`product/${product.id}/`)
                            }
                          >
                            {product.title}
                          </a>
                        </h3>
                        <div className="price">
                          Kshs {formatPrice(product.price)} &nbsp;
                          <span>20.00</span>
                        </div>

                        <button
                          className="add-to-cart"
                          onClick={() => history.push(`product/${product.id}/`)}
                        >
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="row" style={{ marginTop: "20px" }}>
              {products.slice(8, 12).map((product) => {
                return (
                  <div key={product.id} className="col-md-3 col-sm-6">
                    <div className="product-grid6">
                      <div className="product-image6">
                        <a
                          href
                          onClick={() => history.push(`product/${product.id}/`)}
                        >
                          <img
                            className="pic-1"
                            src={product.image_url_1}
                            alt="..."
                          />
                        </a>
                      </div>
                      <div className="product-content">
                        <h3 className="title">
                          <a
                            href
                            onClick={() =>
                              history.push(`product/${product.id}/`)
                            }
                          >
                            {product.title}
                          </a>
                        </h3>
                        <div className="price">
                          {" "}
                          Kshs {formatPrice(product.price)}
                          <span>$14.00</span>
                        </div>
                      </div>
                      <ul className="social">
                        <li>
                          <a href="#/" data-tip="Quick View">
                            <i className="fa fa-search" />
                          </a>
                        </li>
                        <li>
                          <a href="#/" data-tip="Add to Wishlist">
                            <i className="fa fa-shopping-bag" />
                          </a>
                        </li>
                        <li>
                          <a
                            href
                            data-tip="Add to Cart"
                            onClick={() =>
                              history.push(`product/${product.id}/`)
                            }
                          >
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div style={{ height: "300px" }}>
          <div className="save-item">
            <h1>SAVE 10% </h1>
            <p>
              <strong>ON FOOD MARKET</strong>
            </p>
            <h2>SUMMER SALE</h2>
          </div>
        </div>
      </div>

      <div className="row" style={{ background: "white" }}>
        <div className="container">
          <div className="row" style={{ marginTop: "20px" }}>
            {products.slice(0, 4).map((product) => {
              return (
                <div key={product.id} className="col-md-3 sm-6">
                  <div className="product-grid4">
                    <div className="product-image4">
                      <a
                        href
                        onClick={() => history.push(`product/${product.id}/`)}
                      >
                        <img
                          className="pic-1"
                          src={product.image_url_1}
                          alt="#"
                        />
                        <img
                          className="pic-2"
                          src={product.image_url_2}
                          alt="#"
                        />
                      </a>
                      <ul className="social">
                        <li>
                          <a
                            href
                            data-tip="View Product"
                            onClick={() =>
                              history.push(`product/${product.id}/`)
                            }
                            producta-tip="Quick View"
                          >
                            <i className="fa fa-eye" />
                          </a>
                        </li>
                        <li>
                          <a href="/login" data-tip="Add to Wishlist">
                            <i className="fa fa-shopping-bag" />
                          </a>
                        </li>
                        <li>
                          <a href="/login" data-tip="Add to Cart">
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                      <span className="product-new-label">New</span>
                      <span className="product-discount-label">
                        {product.discout_price}%
                      </span>
                    </div>
                    <div className="product-content">
                      <h3 className="title">
                        <a
                          href
                          onClick={() => history.push(`product/${product.id}/`)}
                        >
                          {product.title}
                        </a>
                      </h3>
                      <div className="price">
                        Kshs {formatPrice(product.price)} &nbsp;
                        <span>20.00</span>
                      </div>

                      <button
                        className="add-to-cart"
                        onClick={() => history.push(`product/${product.id}/`)}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

MainBody.propTypes = {
  addProduct: PropTypes.func.isRequired,
};

export default connect(null, { addProduct })(MainBody);
