import React, { Component } from "react";
import { connect } from "react-redux";
import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavItem,
  NavLink,
  Badge,
} from "reactstrap";
import { Link } from "react-router-dom";

class CartSummary extends Component {
  renderEmpty() {
    return (
      <NavItem style={{ fontSize: "1.5em", fontFamily: "bold", color: "black" }}>
        <NavLink>Sepetiniz Boş</NavLink>
      </NavItem>
    );
  }

  renderSummary() {
    return (
      <UncontrolledDropdown inNavbar nav>
        <DropdownToggle style={{ fontSize: "2em", fontFamily: "bold", color:"black" }} caret nav>
          Sepet
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.id}>
              {cartItem.product.parcaNo}
              <Badge style={{ marginLeft: "0.5em" }} color="success">
                {cartItem.quantity}
              </Badge>
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem>
            <Link to={"/cart"}>Sepete Git</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

export default connect(mapStateToProps)(CartSummary);
