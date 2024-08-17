import { createAction, props } from '@ngrx/store';
import { IProduct } from 'src/app/core/interfaces/product';

export const loadProducts = createAction('[Products] Load Products');
export const loadProductsSuccess = createAction(
  '[Products] Load Products Success',
  props<{ products: IProduct[] }>()
);
export const loadProductsFailure = createAction(
  '[Products] Load Products Failure',
  props<{ error: string }>()
);



export const searchProductsSuccess = createAction(
  '[Product] Search Products Success',
  props<{ products: IProduct[] }>()
);
export const searchProductsFailure = createAction(
  '[Product] Search Products Failure',
  props<{ error: any }>()
);

export const searchProducts = createAction(
  '[Product] Search Products',
  props<{ keyword: string }>()
);