import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../../interfaces/product';
import { handleError } from 'src/app/utils/handle-error';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(environment.apiUrl).pipe(
      catchError(handleError) 
    );
  }

}
