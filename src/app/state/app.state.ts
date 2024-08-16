import { CartState } from "./cart/cart.state";
import { ProductsState } from "./products/products.state";

export interface AppState {
  products: ProductsState;
  cart: CartState;
}
