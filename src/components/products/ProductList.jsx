import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge, Table, CardImg, Card, Button, Form } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs";

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }

  state = { adet: 1 };

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.setState({ adet: parseInt(event.target.value) });
  };


  // onSubmitHandlerAdet = (product) => {
  //   product.preventDefault();
  //   this.addToCart(product);
  // };


  addToCart = (product) => {
    this.props.actions.addToCart({ quantity: this.state.adet, product });
    alertify.success(product.parcaNo + "sepete eklendi");
  };



  render() {
    return (
      <div>
        <h5>
          <Badge color="warning">Ürünler</Badge>
          <Badge color="success">{this.props.currentCategory.name}</Badge>
          <Badge color="success">{this.props.currentModel.model}</Badge>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Forograf</th>
                <th>Marka</th>
                <th>Model</th>
                <th>Parça No</th>
                <th>Parça Adı</th>
                <th>Tutar</th>
                <th>Adet</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.products.map((product) => (
                <tr>
                  <th scope="row">{product.id}</th>
                  <td>
                    <Card style={{ width: "8rem" }}>
                      <CardImg variant="top" src="holder.js/100px180" />
                    </Card>
                  </td>
                  <td>{product.markaId}</td>
                  <td>{product.modelId}</td>
                  <td>{product.parcaNo}</td>
                  <td>{product.parcaAdı}</td>
                  <td>{product.tutar}</td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      defaultValue="1"
                      placeholder="Adet"
                      onChange={this.onSubmitHandler}
                    ></input>
                  </td>

                  <td>
                    <Button
                      color="success"
                      onClick={() => this.addToCart(product)}
                    >
                      Sepete Ekle
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </h5>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    currentModel: state.changeModelReducer,
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
