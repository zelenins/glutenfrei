import React from 'react';
import { connect } from 'react-redux';
import * as productActions from '../../redux/actions/productActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

class ProductsPage extends React.Component {
  state = {
    product: {
      name: 'Kafa'
    }
  };

  handleChange = event => {
    const product = { ...this.state.product, name: event.target.value };
    this.setState({ product });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.createProduct(this.state.product);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          onChange={this.handleChange}
          value={this.state.product.title}
        />
        <input type='submit' value='Save' />
        {this.props.products.map(product => (
          <div key={product.name}>{product.name}</div>
        ))}
      </form>
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
