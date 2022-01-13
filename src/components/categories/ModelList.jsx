import React, { Component } from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem,Badge } from "reactstrap";
import { bindActionCreators } from "redux";
import * as modelActions from "../../redux/actions/modelActions"
import * as productActions from "../../redux/actions/productActions"

class ModelList extends Component {
  componentDidMount() {
    this.props.actions.getModels();
  }

  selectModel = (model) => {
    this.props.actions.changeModel(model);
    this.props.actions.getProducts2(model.id)
  };

  render() {
    return (
      <div>
        <h3>
          <Badge color="warning">Model</Badge>
        </h3>
        <ListGroup>
          {this.props.models.map((model) => (
            <ListGroupItem
              active={model.id === this.props.currentModel.id}
              tag="h3"
              onClick={() => this.selectModel(model)}
              key={model.id}
            >
              {model.model}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentModel:state.changeModelReducer,
    models:state.modelListReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getModels:bindActionCreators(
        modelActions.getModels,
        dispatch
      ),
      changeModel:bindActionCreators(
        modelActions.changeModel,
        dispatch
      ),
      getProducts2: bindActionCreators(productActions.getProducts2, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModelList);
