import { Injectable } from '@angular/core';
import { ILoginResponse, IUserFormValues } from '../../interfaces/user';
import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { handleError } from 'src/app/utils/handle-error';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) {}

  isAuthenticated(): boolean {
    const token = localStorage.getItem('authToken');
    return !!token;
  }

  login(body:IUserFormValues): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(environment.apiUrl + '/auth/login', body).pipe(
      catchError(handleError) 
    );
  }



  logout(): void {
    localStorage.removeItem('authToken');
  }

  getToken(): string {
    return localStorage.getItem('authToken') || '';
  }
}
