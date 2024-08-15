import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProductsService } from '../../services/products/products.service';
import { IProduct } from '../../interfaces/product';

export const ProductsResolver: ResolveFn<IProduct[]> = (_route, _state) => {
  const productsService = inject(ProductsService);
  return productsService.getAll();
};
