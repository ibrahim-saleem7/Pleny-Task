import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as ProductsActions from './products.actions';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Injectable()
export class ProductsEffects {

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.loadProducts),
      mergeMap(() =>
        this.productsService.getAllProducts().pipe( 
          map((products) => ProductsActions.loadProductsSuccess({ products })),
          catchError((error) => of(ProductsActions.loadProductsFailure({ error })))
        )
      )
    )
  );
  searchProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.searchProducts),
      mergeMap((action) =>
        this.productsService.search(action.keyword).pipe(
          map((products) => ProductsActions.searchProductsSuccess({ products })),
          catchError((error) => of(ProductsActions.searchProductsFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}
}
