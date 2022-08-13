import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buy, sell } from '../../redux/Products/ProductsSlice';
import './ButtonGroup.css';

function ButtonGroup({ id }) {
  const [amount, setAmount] = useState(0);
  const balance = useSelector((state) => state.products.balance);
  const products = useSelector((state) => state.products.items);
  const product = products.find((product) => product.id === id);
  const dispatch = useDispatch();

  const inputBuy = (e) => {
    setAmount(Number(e.target.value));

    dispatch(buy({ id, amount: Number(e.target.value) }));
  };

  const buttonBuy = () => {
    setAmount(amount + 1);

    dispatch(buy({ id, amount: amount + 1 }));
  };

  const buttonSell = () => {
    setAmount(amount - 1);

    dispatch(sell({ id }));
  };

  return (
    <div className="w-100 my-3">
      <div className="buttonGroup d-flex justify-content-evenly align-items-center mx-5">
        <button
          className="px-4 py-2 fw-bold btn1 rounded"
          onClick={buttonSell}
          {...(amount < 1 && { disabled: true })}
          {...(amount > 0 && {
            style: { backgroundColor: '#f53b64', color: '#fff' },
          })}
        >
          Sell
        </button>
        <input
          className="py-1 px-2 text-center"
          type="number"
          value={amount}
          onChange={inputBuy}
          {...(balance - product.price < 0 && { disabled: true })}
        />
        <button
          className="px-4 py-2 fw-bold btn2 rounded"
          onClick={buttonBuy}
          {...(balance - product.price < 0 && {
            disabled: true,
            style: {
              backgroundColor: '#f1f2f6',
              color: 'gray',
            },
          })}
        >
          Buy
        </button>
      </div>
    </div>
  );
}

export default ButtonGroup;
