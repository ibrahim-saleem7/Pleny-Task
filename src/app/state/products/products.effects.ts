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
      mergeMap(() => this.productsService.getAll()
        .pipe(
          map(products => ProductsActions.loadProductsSuccess({ products })),
          catchError(error => of(ProductsActions.loadProductsFailure({ error: error.message })))
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}
}
