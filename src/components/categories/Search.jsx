import React, { Component } from "react";
import { Form,Badge } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions"
import * as searchActions from "../../redux/actions/searchActions"

class Search extends Component {
  
    state={ara:""}
    
    onSearchHandler =(event)=>{
        this.setState({ara:event.target.value})
    }

    onSubmitHandler=(event)=>{
        event.preventDefault();
        this.arama()
    }

    arama =(state)=>{
        this.props.actions.getProducts3(this.state.ara)
    }

  render() {
    return (
      <div>
        <h3>
          <Badge color="warning">Parça No ile Ara</Badge>
        </h3>
        <Form onSubmit={this.onSubmitHandler}>
          <input type="text"
              placeholder="Ara" 
              onChange={this.onSearchHandler}       
          ></input>
          <input type="submit" value="Ara"></input>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      currentSearch:state.changeModelReducer,
      models:state.modelListReducer
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: {
        changeSearch:bindActionCreators(
          searchActions.changeSearch,
          dispatch
        ),
        getProducts3: bindActionCreators(productActions.getProducts3, dispatch),
      },
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Search);