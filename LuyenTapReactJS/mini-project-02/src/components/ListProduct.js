import React, { Component } from 'react'
import Product from './Product'
import { connect } from 'react-redux';

class ListProduct extends Component {
    render() {
        console.log("Dữ liệu:", this.props.products);
        let elementProduct = this.props.products.map((item, index) => {
            return (
                <Product key={index} renderProducts={item} />
            );
        });
        return (
            <>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h1 className="panel-title">List Products</h1>
                        </div>
                        <div className="panel-body" id="list-product">
                            {/* PRODUCT : START */}
                            {elementProduct}
                            {/* PRODUCT : END */}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.listProduct
    }
};

export default connect(mapStateToProps, null)(ListProduct);