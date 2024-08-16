import { Injectable, } from '@angular/core';
import { ILoginResponse, IUserFormValues } from '../../interfaces/user';
import { BehaviorSubject, catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { handleError } from 'src/app/utils/handle-error';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }
  isLoggedIn = new BehaviorSubject<boolean>(false);

  login(body: IUserFormValues): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(environment.apiUrl + '/auth/login', body).pipe(
      catchError(handleError)
    );
  }
  logout(): void {
    localStorage.removeItem('authToken');
    this.isLoggedIn.next(false);
  }
  loginStatus(status: boolean): void {
    this.isLoggedIn.next(status);
  }

  userIsLoggedIn(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }

  getToken(): string {
    return localStorage.getItem('authToken') || '';
  }
}
