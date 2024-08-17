import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export function handleError(error: HttpErrorResponse) {
  let errorMessage = '';

  if (error.error instanceof ErrorEvent) {
    errorMessage = `Client-side error: ${error?.error?.message}`;
  } else {
    errorMessage = `Server-side error: ${error?.status} - ${error?.message}`;
  }
  console.error(errorMessage);
  return throwError(() => new Error(errorMessage));
}
