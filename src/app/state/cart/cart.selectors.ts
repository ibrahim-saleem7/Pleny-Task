import { createSelector } from '@ngrx/store';
import { CartState } from './cart.state';
import { AppState } from '../app.state';

export const selectCartState = (state: AppState) => state.cart

export const selectTotalQuantity = createSelector(
  selectCartState,
  (state: CartState) => state?.cart?.length
);
