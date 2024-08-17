import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/core/interfaces/product';
import { addToCart } from 'src/app/state/cart/cart.actions';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnChanges {

  @Input('data') data: IProduct | undefined
  product!: IProduct

  constructor(private store:Store) { }


  ngOnChanges(_changes: SimpleChanges): void {
    if (this.data) {
      this.product = this.data
    }
  }

  addToCart(){
    this.store.dispatch(addToCart({product: this.product}))    
  }



}
