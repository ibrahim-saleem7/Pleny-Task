import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ICategory } from 'src/app/core/interfaces/category';
import { IProduct } from 'src/app/core/interfaces/product';
import { CategoriesService } from 'src/app/core/services/categories/categories.service';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {


  private subscription: Subscription = new Subscription();
  products: IProduct[] = []
  metaData: { skip: number, total: number } = { skip: 0, total: 0 }
  url: string = ''
  categoryName: string = ''
  products$!: Observable<IProduct[]>;

  constructor(
    private categoriesService: CategoriesService,
    private store: Store<AppState>,
    private cdr: ChangeDetectorRef

  ) { }

  ngOnInit(): void {
    this.subscription.add(
      this.store.pipe(select((state => state.products.products))).subscribe({
        next: (data: any) => {
          this.products = data.products;
          this.metaData = { skip: data.skip, total: data.total }
        },
        error: (err) => {
          console.log(err);
        }
      })
    )

  }


  getProductsByCategory(data: any) {
    this.url = data.url
    this.categoryName = data.name
    this.getData(data.url, this.metaData.skip)
    this.cdr.detectChanges()
  }

  onPageChange(newSkip: number): void {
    this.getData(this.url, newSkip)
  }

  trackByCategory(_index: number, category: ICategory): string {
    return category.slug;
  }

  getData(url: string, skip: number) {
    this.subscription.add(
      this.categoriesService.getProductsByCategory(url, skip).subscribe({
        next: (data: any) => {
          this.products = data.products;
          this.metaData = { skip: data.skip, total: data.total }
        },
        error: (err) => {
          console.log(err);
        }
      })
    )
  }

  unsubscribeAll(): void {
    this.subscription?.unsubscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribeAll();
  }
}
