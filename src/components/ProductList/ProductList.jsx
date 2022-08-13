import Product from '../Product/Product';
import { useSelector } from 'react-redux';
import './ProductList.css';

function ProductList() {
  const products = useSelector((state) => state.products.items);

  return (
    <div className="productList">
      <div className="container">
        <div className="row">
          {products.map((product) => {
            return <Product key={product.id} data={product} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
