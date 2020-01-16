import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartProduct extends Component {

    static propTypes = {
        product: PropTypes.object.isRequired,
        removeProduct: PropTypes.func.isRequired,
        changeProductQuantity: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            product: this.props.product,
            isMouseOver: false
        };
    }

    handleMouseOver = () => {
        this.setState({ isMouseOver: true });
    };

    handleMouseOut = () => {
        this.setState({ isMouseOver: false });
    };

    handleOnIncrease = () => {
        const { changeProductQuantity } = this.props;
        const { product } = this.state;
        product.quantity = product.quantity + 1;
        changeProductQuantity(product);
    };

    handleOnDecrease = () => {
        const { changeProductQuantity } = this.props;
        const { product } = this.state;
        product.quantity = product.quantity - 1;
        changeProductQuantity(product);
    };

    render() {
        const { removeProduct } = this.props;
        const { product } = this.state;

        const classes = ['shelf-item'];

        if (!!this.state.isMouseOver) {
            classes.push('shelf-item--mouseover');
        }

        return (
            <div className={classes.join(' ')}>
                <button
                    type="button"
                    className="close" aria-label="Close"
                    onMouseOver={() => this.handleMouseOver()}
                    onMouseOut={() => this.handleMouseOut()}
                    onClick={() => removeProduct(product)}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className="shelf-item__details">
                    {/*<img src={product.image_url_1} className="card-img-top mr-3"  alt="..." height="50px"/>*/}
                    <p className="title">{product.title}</p>
                    <p className="desc">
                        {`${product.style}`} <br />
                        Quantity: {product.quantity}
                    </p>
                </div>
                <div className="shelf-item__price">
                    <p>{product.price}</p>
                    <div>
                        <button onClick={this.handleOnDecrease} disabled={product.quantity === 1} className="change-product-button">-</button>
                        <button onClick={this.handleOnIncrease} className="change-product-button">+</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartProduct;