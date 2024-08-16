import { createAction, props } from '@ngrx/store';
import { IProduct } from 'src/app/core/interfaces/product';

export const loadCart = createAction('[Cart] Load Cart');
export const loadCartSuccess = createAction(
  '[Cart] Load Cart Success',
  props<{ cart: IProduct[] }>()
);
export const loadCartFailure = createAction(
  '[Cart] Load Cart Failure',
  props<{ error: string }>()
);


export const addToCart = createAction(
  '[Cart] Add to Cart',
  props<{ product: IProduct, quantity: number }>()
);