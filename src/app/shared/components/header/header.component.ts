import { Component,  OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { AppState } from 'src/app/state/app.state';
import { selectTotalQuantity } from 'src/app/state/cart/cart.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  count$!: Observable<any>;
  userLogin : boolean = false
  private subscription: Subscription = new Subscription();

  constructor(private store: Store<AppState>,private authService: AuthService) {
  }
  
  
  ngOnInit(): void {
    this.subscription.add(
      this.authService.userIsLoggedIn().subscribe({
        next: (data) => {
          console.log("data",data);
          
          if(data) {
            this.userLogin = true;
          }else{
            this.userLogin = false
          }
        },
        error: (err) => {
          this.userLogin = false
          console.log(err);
        }
      })
    )    
            
    this.count$ = this.store.pipe(select(selectTotalQuantity));
  }

}
