import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

export const authGuard: CanActivateFn = (_route, _state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isAuthenticated = authService.getToken();

  if (isAuthenticated) {
    authService.loginStatus(true);
    return true;
  } else {
    authService.loginStatus(false);
    router.navigate(['/auth/login']);
    return false;
  }
};
