import React from 'react';
import PropTypes from 'prop-types';
import ProductsList from './productsList';

import { connect } from 'react-redux';
import * as productActions from '../../redux/actions/productActions';
import { bindActionCreators } from 'redux';

class ProductsPage extends React.Component {

  componentDidMount = async () => {
    this.getPosts();
  }
  
  getPosts = () => {
    this.props.actions.loadProducts()
    .catch(error => {
      console.log('Loading products failed' + error)
    });
    
  }

  render() {
    return (
       <ProductsList products={this.props.products}/>
    );
  }
}

ProductsPage.propTypes = {
  products: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
