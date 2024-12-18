import React, { Component } from 'react'
import Title from './component/Title';
import ListProduct from './component/ListProduct';
import Cart from './component/Cart';
 class App extends Component {
  render() {
    return (
      <div className="container">
      {/* TITLE : START */}
      <Title></Title>
      {/* TITLE : END */}
        <div className="row">
          {/* LIST PRODUCT : START */}
          <ListProduct/>
          {/* LIST PRODUCT : END */}
          {/* CART : START */}
          <Cart/>
          {/* CART : END */}
        </div>
      </div>
    );
  }
}


export default App;
