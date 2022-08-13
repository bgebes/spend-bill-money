import React from 'react';
import Format from 'format-number';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import './Product.css';

function Product({ data }) {
  return (
    <div className="my-2 col-4">
      <div className="product d-flex flex-column justify-content-center align-items-center px-1">
        <img className="my-5" src={data.image} alt={data.name} />
        <div className="fw-bold fs-4">{data.name}</div>
        <div className="fw-semibold fs-5 text-green">
          {Format({ prefix: '$' })(data.price)}
        </div>
        <ButtonGroup id={data.id} />
      </div>
    </div>
  );
}

export default Product;
