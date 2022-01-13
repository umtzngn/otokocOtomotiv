import React, { Component } from "react";
import { connect } from "react-redux";
import {  Table, CardImg, Card } from "reactstrap";

class CartDetail extends Component {
  
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Forograf</th>
              <th>Parça No</th>
              <th>Parça Adı</th>
              <th>Adet</th>
              <th>Tutar</th>
              <th>Toplam Tutar</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((cartItem) => (
              <tr>
                <th scope="row">{cartItem.product.id}</th>
                <td>
                  <Card style={{ width: "8rem" }}>
                    <CardImg variant="top" src="holder.js/100px180" />
                  </Card>
                </td>
                <td>{cartItem.product.parcaNo}</td>
                <td>{cartItem.product.parcaAdı}</td>
                <td>{cartItem.quantity}</td>
                <td>{cartItem.product.tutar}</td>
                <td> {cartItem.quantity*cartItem.product.tutar}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }

  
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}



export default connect(mapStateToProps)(CartDetail);
