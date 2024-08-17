import { createReducer, on } from '@ngrx/store';
import { ProductsState } from './products.state';
import * as ProductsActions from './products.actions';

export const initialState: ProductsState = {
  products: [],
  error: null,
};

export const productsReducer = createReducer(
  initialState,
  on(ProductsActions.loadProducts, (state) => ({
    ...state,
    error: null,
  })),
  on(ProductsActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
  })),
  on(ProductsActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(ProductsActions.searchProductsSuccess, (state, { products }) => ({ ...state, products, error: null })),

);
