import { createSlice } from '@reduxjs/toolkit';
import { productList } from '../../helpers/productList';

export const ProductsSlice = createSlice({
  name: 'products',
  initialState: {
    items: productList,
    cart: [],
    cartPrice: 0,
    balance: 100000000000,
  },
  reducers: {
    buy: (state, action) => {
      const { id, amount } = action.payload;
      const item = state.items.find((item) => item.id === id);
      const regIndex = state.cart.findIndex(
        (cardItem) => cardItem.name === item.name
      );

      let totalPrice = item.price * amount;
      if (regIndex === -1)
        state.cart.push({ name: item.name, amount, price: item.price });

      if (regIndex !== -1) {
        const original = state.cart.at(regIndex).amount;
        state.cart.at(regIndex).amount = amount;

        totalPrice = item.price * (amount - original);
      }

      state.balance -= totalPrice;
      state.cartPrice += totalPrice;
    },
    sell: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      const regIndex = state.cart.findIndex(
        (cardItem) => cardItem.name === item.name
      );

      if (--state.cart.at(regIndex).amount == 0) {
        state.cart = state.cart.filter((product) => product.name !== item.name);
      }

      state.balance += item.price;
      state.cartPrice -= item.price;
    },
  },
});

export const { buy, sell } = ProductsSlice.actions;
export default ProductsSlice.reducer;
