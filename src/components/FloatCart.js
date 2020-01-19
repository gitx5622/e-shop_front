import React, {Component, useEffect} from 'react';
import {connect, useSelector} from 'react-redux';
import { loadCart, removeProduct, changeProductQuantity} from '../store/cart/cartAction/cartActions';
import { updateCart } from '../store/total/totalAction/totalActions';
import CartProduct from "./CartProduct";
import '../css/FloatCart.css';
import {message} from "antd";
import PropTypes from 'prop-types';
import {formatPrice} from "../utils";
import {history} from "../history";



class FloatCart extends Component {

    static propTypes = {
        loadCart: PropTypes.func.isRequired,
        updateCart: PropTypes.func.isRequired,
        cartProducts: PropTypes.array.isRequired,
        newProduct: PropTypes.object,
        removeProduct: PropTypes.func,
        productToRemove: PropTypes.object,
        changeProductQuantity: PropTypes.func,
        productToChange: PropTypes.object,
        isAuthenticated: PropTypes.bool.isRequired,
    };

    constructor() {
        super();
        this.state = {
            isOpen: false,
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.newProduct !== this.props.newProduct) {
            this.addProduct(nextProps.newProduct);
        }

        if (nextProps.productToRemove !== this.props.productToRemove) {
            this.removeProduct(nextProps.productToRemove);
        }

        if (nextProps.productToChange !== this.props.productToChange) {
            this.changeProductQuantity(nextProps.productToChange);
        }
    }

    openFloatCart = () => {
        this.setState({ isOpen: true });
    };

    closeFloatCart = () => {
        this.setState({ isOpen: false });
    };

    addProduct = product => {
        const { cartProducts, updateCart } = this.props;
        let productAlreadyInCart = false;

        cartProducts.forEach(cp => {
            if (cp.id === product.id) {
                cp.quantity += product.quantity;
                productAlreadyInCart = true;
            }
        });

        if (!productAlreadyInCart) {
            cartProducts.push(product);
        }
        updateCart(cartProducts);
        localStorage.setItem('myCart', JSON.stringify(cartProducts));
        this.openFloatCart();
    };

    removeProduct = product => {
        const { cartProducts, updateCart } = this.props;

        const index = cartProducts.findIndex(p => p.id === product.id);
        if (index >= 0) {
            cartProducts.splice(index, 1);
            updateCart(cartProducts);
        }
    };

    proceedToCheckout = () => {
        const {
            totalPrice,
            productQuantity,
            currencyFormat,
        } = this.props.cartTotal;

        if (!productQuantity) {
            message.error('Add some product in the cart!');
        } else {
                message.success(
                    `Checkout - Subtotal: ${currencyFormat} ${formatPrice(totalPrice)}`
                );
        }
        if (!this.props.isAuthenticated){
            this.closeFloatCart();
            history.push('/login')
        }else if (!this.props.authAddress){
            this.closeFloatCart();
            history.push('/checkout')
        } else {
            this.closeFloatCart();
            history.push('/payment')
        }
    };

    changeProductQuantity = changedProduct => {
        const { cartProducts, updateCart } = this.props;

        const product = cartProducts.find(p => p.id === changedProduct.id);
        product.quantity = changedProduct.quantity;
        if (product.quantity <= 0) {
            this.removeProduct(product);
        }
        updateCart(cartProducts);
    };
    render() {
        const { cartTotal, cartProducts, removeProduct, changeProductQuantity } = this.props;

        const products = cartProducts.map(p => {
            return (
                <CartProduct product={p} removeProduct={removeProduct} changeProductQuantity={changeProductQuantity} key={p.id} />
            );
        });

        let classes = ['float-cart'];

        if (!!this.state.isOpen) {
            classes.push('float-cart--open');
        }
        return (
            <div className={classes.join(' ')}>
                {/* If cart open, show close (x) button */}
                {this.state.isOpen && (
                    <div
                        onClick={() => this.closeFloatCart()}
                        className="float-cart__close-btn"
                    >
                        X
                    </div>
                )}

                {/* If cart is closed, show bag with quantity of product and open cart action */}
                {!this.state.isOpen && (
                    <span
                        onClick={() => this.openFloatCart()}
                        className="bag bag--float-cart-closed"
                    ><i style={{marginTop:"10px", color:"#000000"}} className="fa fa-shopping-basket fa-2x" aria-hidden="true"/>
            <span className="bag__quantity">{cartTotal.productQuantity}</span>
          </span>
                )}

                <div className="float-cart__content">
                    <div className="float-cart__header">
            <span className="bag">
              <span className="bag__quantity">{cartTotal.productQuantity}</span>
            </span>
                        <span className="header-title">Cart</span>
                    </div>

                    <div className="float-cart__shelf-container">
                        {products}
                        {!products.length && (
                            <p className="shelf-empty">
                                Add some products in the cart <br />
                            </p>
                        )}
                    </div>

                    <div className="float-cart__footer">
                        <div className="sub">SUBTOTAL</div>
                        <div className="sub-price">
                            <p className="sub-price__val">
                                {cartTotal.currencyFormat} {formatPrice(cartTotal.totalPrice)}
                            </p>
                        </div>
                        <div onClick={() => this.proceedToCheckout()} className="buy-btn">
                            Checkout
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cartProducts: state.Cart.products,
    newProduct: state.Cart.productToAdd,
    productToRemove: state.Cart.productToRemove,
    productToChange: state.Cart.productToChange,
    cartTotal: state.Total.data,
    isAuthenticated: state.Auth.isAuthenticated,
});


export default connect(mapStateToProps, { loadCart, updateCart, removeProduct, changeProductQuantity } )(FloatCart);