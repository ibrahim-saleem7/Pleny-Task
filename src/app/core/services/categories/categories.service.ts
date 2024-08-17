import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { handleError } from 'src/app/utils/handle-error';
import { environment } from 'src/environments/environment';
import { ICategory } from '../../interfaces/category';
import { IProduct } from '../../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(environment.apiUrl + '/products/categories').pipe(
      catchError(handleError)
    );
  }
  getProductsByCategory(url: string, skip: number): Observable<IProduct[]> {
    const skipItems = skip ? `&skip=${skip}` : '';
    return this.http.get<IProduct[]>(url + `?limit=10${skipItems}`).pipe(
      catchError(handleError)
    );
  }
}
