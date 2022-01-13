import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav } from "reactstrap";
import CartSummary from "../cart/CartSummary";
import { Link } from "react-router-dom";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" expand="lg" light>
          <h1>
            <NavbarBrand
              color="dark"
              style={{
                fontSize: "1.5em",
                marginRight: "12em",
                fontFamily: "bold",
              }}
              href="/"
            >
              OtokocOtomotiv
            </NavbarBrand>
          </h1>
          <h1>
            <NavbarBrand
              color="dark"
              style={{
                marginLeft: "6em",
                fontSize: "1em",
                fontFamily: "bold",
              }}
              href="/"
            >
              <Link to={"/register"}>Giriş Yap</Link>
            </NavbarBrand>
          </h1>
          <NavbarToggler
            className="dark"
            onClick={<Link to={"/card"}>Sepete Git</Link>}
          />
          <Collapse navbar>
            <Nav className="form-inline" navbar>
              <CartSummary></CartSummary>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
