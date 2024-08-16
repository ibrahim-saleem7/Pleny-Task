import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICategory } from 'src/app/core/interfaces/category';
import { IProduct } from 'src/app/core/interfaces/product';
import { CategoriesService } from 'src/app/core/services/categories/categories.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {


  @Output('data') data: EventEmitter<object> = new EventEmitter<object>();

  private subscription: Subscription = new Subscription();
  utlAllProducts: string = environment.apiUrl + '/products'
  categories: ICategory[] = []
  products: IProduct[] = []

  constructor(private categoriesService: CategoriesService) { }


  ngOnInit(): void {
    this.getCategories()
    this.data.emit({url:this.utlAllProducts,name:'All Products'});
  }


  getCategories() {
    this.subscription.add(
      this.categoriesService.getCategories().subscribe({
        next: (data) => {
          this.categories = data;
          console.log(data);
          
        },
        error: (err) => {
          console.log(err);
        }
      })
    )
  }


  getProductsByCategory(url: string,name:string) {
    this.data.emit({url:url,name});
  }

  trackByCategory(_index: number, category: ICategory): string {
    return category.slug;
  }


  unsubscribeAll(): void {
    this.subscription?.unsubscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribeAll();
  }


}
