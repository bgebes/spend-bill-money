import Format from 'format-number';
import { useSelector } from 'react-redux';
import './Receipt.css';

function Receipt() {
  const cart = useSelector((state) => state.products.cart);
  const cartPrice = useSelector((state) => state.products.cartPrice);

  if (cart.length === 0) {
    return null;
  }

  return (
    <div className="receipt container d-flex flex-column justify-content-center align-items-center my-5">
      <div className="h2 fw-semibold mb-4">Your Receipt</div>
      <div className="receiptItems border-bottom border-dark pb-4">
        {cart.map((product, index) => {
          return (
            <div
              className="d-flex justify-content-between align-items-center"
              key={index}
            >
              <div className="fw-bold">{product.name}</div>
              <div className="fw-bold">x{product.amount}</div>
              <div className="text-green fw-bold">
                {Format({ prefix: '$' })(product.price * product.amount)}
              </div>
            </div>
          );
        })}
      </div>
      <div className="d-flex justify-content-between align-items-center mt-3">
        <div className="fs-5 fw-bold">TOTAL</div>
        <div className="ms-auto text-green fw-bold">
          {Format({ prefix: '$' })(cartPrice)}
        </div>
      </div>
    </div>
  );
}

export default Receipt;
