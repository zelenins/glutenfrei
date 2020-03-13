import React from 'react';
import PropTypes from 'prop-types';

const productsList = ({ products }) => (
  <div>
    <h2>Products</h2>
    
    <div className='list-group'>
      <div className='row'>
        {products.map(product => (
          <a
            key={product.id}
            href={'/products/' + product.id}
            className='list-group-item list-group-item-action col-6'
          >
            <div>
              <div>
                {product.productTitle}
                {product.glutenFreeCertified && (
                  <img
                    height='30px'
                    width='30px'
                    src='https://www.pngfind.com/pngs/m/409-4094741_gluten-free-certified-canadian-celiac-association-logo-hd.png'
                  />
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
);

productsList.propTypes = {
  products: PropTypes.array.isRequired
};

export default productsList;
