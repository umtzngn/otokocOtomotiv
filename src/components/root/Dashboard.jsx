import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import CategoryList from "../categories/CategoryList";
import ModelList from "../categories/ModelList";
import Search from "../categories/Search";
import ProductList from "../products/ProductList";

export default class Dashboard extends Component {
  render()
   {
    return (
      <div>
        <Row>
          <Col xs="3">
            <CategoryList />
            <ModelList/>
            <Search/>
          </Col>
          <Col xs="9">
            <ProductList />
          </Col>
        </Row>
      </div>
    );
  }
}
