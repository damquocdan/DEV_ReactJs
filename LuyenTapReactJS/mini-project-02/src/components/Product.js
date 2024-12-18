import React, { Component } from 'react';
import { connect } from 'react-redux';

class Product extends Component {
    render() {
        let { renderProducts } = this.props;
        console.log(renderProducts);

        let elementBuy = '';
        if (renderProducts.quantity > 0) {
            elementBuy = <>
                <input
                    name="quantity-product-1"
                    type="number"
                    value={this.state.quantity}
                    min={1}
                    onChange={(event) => this.setState({
                        quantity: event.target.value
                    })}
                />
                <button data-product={1} className="btn btn-success">
                    Mua hàng
                </button>
                <a data-product={1} href="#" className="price">
                    {renderProducts.price} USD
                </a>
            </>
        }

        return (
            <>
                <div className="media product">
                    <div className="media-left">
                        <a href="#">
                            <img
                                className="media-object"
                                src={`images/${renderProducts.image}`}
                                alt="charmander"
                            />
                        </a>
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">{renderProducts.productName}</h4>
                        <p>
                            {renderProducts.descriptions}
                        </p>
                        {elementBuy}
                    </div>
                </div>
            </>
        )
    }
}


const mapDispatchToProps = (state) => {
    return {};
};

export default connect(null, mapDispatchToProps)(Product);