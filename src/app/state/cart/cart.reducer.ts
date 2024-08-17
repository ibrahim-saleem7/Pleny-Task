import { createReducer, on } from '@ngrx/store';
import { CartState } from './cart.state';
import * as CartActions from './cart.actions';

export const initialState: CartState = {
  cart: [],
};

export const cartReducer = createReducer(
  initialState,
  on(CartActions.loadCart, (state) => ({
    ...state,
    error: null,
  })),
  on(CartActions.loadCartSuccess, (state, { cart }) => ({
    ...state,
    cart: cart,
  })),
  on(CartActions.addToCart, (state, { product }) => {
    const updatedItems = [...state.cart, { ...product }];

    return {
      ...state,
      cart: updatedItems,
    };
  }),
  on(CartActions.loadCartFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

