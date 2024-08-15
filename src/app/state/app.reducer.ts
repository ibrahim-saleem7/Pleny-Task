import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { productsReducer } from './products/products.reducer';

export const appReducers: ActionReducerMap<AppState> = {
  products: productsReducer,
};
