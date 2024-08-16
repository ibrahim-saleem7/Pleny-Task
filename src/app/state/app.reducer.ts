import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { productsReducer } from './products/products.reducer';
import { cartReducer } from './cart/cart.reducer';

export const appReducers: ActionReducerMap<AppState> = {
  products: productsReducer,
  cart: cartReducer,
};
