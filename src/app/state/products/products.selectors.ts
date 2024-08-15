import { createSelector } from '@ngrx/store';
import { ProductsState } from './products.state';

export const selectProductsState = (state: ProductsState) => state;

export const selectProducts = createSelector(
  selectProductsState,
  (state: ProductsState) => state.products
);
