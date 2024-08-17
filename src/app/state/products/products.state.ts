import { IProduct } from "src/app/core/interfaces/product";

  
  export interface ProductsState {
    products: IProduct[];
    error: string | null;
  }
  