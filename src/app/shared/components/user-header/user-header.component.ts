import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { AppState } from 'src/app/state/app.state';
import { selectTotalQuantity } from 'src/app/state/cart/cart.selectors';
import { loadProducts, searchProducts } from 'src/app/state/products/products.actions';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit  {
  
  count$!: Observable<any>;
  userLogin : boolean = false
  keyword: string = ''
  private subscription: Subscription = new Subscription();

  constructor(private store: Store<AppState>,private authService: AuthService) {
  }
  
  
  ngOnInit(): void {
    this.subscription.add(
      this.authService.userIsLoggedIn().subscribe({
        next: (data) => {          
          if(data) {
            this.userLogin = true;
          }else{
            this.userLogin = false
          }
        },
        error: (_err) => {
          this.userLogin = false
        }
      })
    )    
            
    this.count$ = this.store.pipe(select(selectTotalQuantity));
  }


  onBlur(){
    if(this.keyword !== ''){
      this.store.dispatch(searchProducts({ keyword:this.keyword }));
    }else{
      this.store.dispatch(loadProducts());
    }
  }
}
