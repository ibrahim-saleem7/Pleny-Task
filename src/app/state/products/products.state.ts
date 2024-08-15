import { IProduct } from "src/app/core/interfaces/product";

  
  export interface ProductsState {
    products: IProduct[];
    loading: boolean;
    error: string | null;
  }
  