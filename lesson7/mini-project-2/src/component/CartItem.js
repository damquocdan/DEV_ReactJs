import React, { Component } from 'react';
import {connect} from 'react-redux'
import { MSG_REMOVE_SUCCESS, MSG_UPDATE_SUCCESS } from '../constants/messages';
import { act_change_notify, act_remove_item, act_update_item } from '../action';

 class CartItem extends Component {
  constructor(props){
    super(props);
    this.state={
      quantity:0
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      quantity:nextProps.renderCart.quantity,
    })
  }
  // cập nhật số lượng trog giỏ hàng
  handleUpdate =(product)=>{
    // map props
    this.props.updateItem(product, this.state.quantity);
    // map notify
    this.props.changeNotify(MSG_UPDATE_SUCCESS)
  }
  // xoá sảp phẩm trong giỏ hàng
  handleDelete =(product)=>{
    this.props.deleteItem(product);
    this.props.changeNotify(MSG_REMOVE_SUCCESS)
  }
    render() {
    let {renderCart,stt} = this.props
    console.log("CartItem:",renderCart);
    // xử lý hiển thị số lượng
    let quantity = (this.state.quantity ===0)?renderCart.quantity:this.state.quantity;
    return (
        <tbody id="my-cart-body">
        {/* CART BODY */}
        <tr>
          <th scope="row">{stt}</th>
          <td>{renderCart.product.productName}</td>
          <td>{renderCart.product.price} USD</td>
          <td>
            <input
              name="cart-item-quantity-1"
              type="number"
              value={quantity}
              min={1}
              onChange={(ev)=>this.setState({quantity:ev.target.value})}
            />
          </td>
          <td>
            <strong>{renderCart.product.price*quantity} USD</strong>
          </td>
          <td>
            <a
              className="label label-info update-cart-item"
              href="#"
              data-product=""
              onClick={()=>this.handleUpdate(renderCart.product)}
            >
              Update
            </a>
            <a
              className="label label-danger delete-cart-item"
              href="#"
              data-product=""
              onClick={()=>this.handleDelete(renderCart.product)}
            >
              Delete
            </a>
          </td>
        </tr>
      </tbody>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    carts:state.cart
  }
}
const mapDispatchToProps =(dispatch)=>{
  return{
    updateItem:(product,quantity)=>{
      dispatch(act_update_item(product,quantity));
    },
    deleteItem:(product)=>{
      dispatch(act_remove_item(product))
    },
    changeNotify:(product,quantity)=>{
      dispatch(act_change_notify(product,quantity));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartItem)