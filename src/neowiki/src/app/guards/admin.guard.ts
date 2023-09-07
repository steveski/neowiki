import { inject } from '@angular/core';
import {
  CanActivateFn,
  Router
} from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';

export const adminGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('access_token');
  const router = inject(Router);
  const jwtHelper = inject(JwtHelperService);

  if(token && !jwtHelper.isTokenExpired(token)) {
    const decodedToken = jwtHelper.decodeToken(token);
    if(decodedToken.adminstrator === 'true') {
      return true;
    }
  }

  router.navigate(['unauthorized']);
  return false;
};
