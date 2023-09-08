import { inject } from '@angular/core';
import {
  CanActivateFn,
  //Router
} from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';

export const permissionsGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('access_token');
  //const router = inject(Router);
  const jwtHelper = inject(JwtHelperService);

  if(token && !jwtHelper.isTokenExpired(token)) {
    const decodedToken = jwtHelper.decodeToken(token);
    const permissions = decodedToken.permissions.split(',');

    if(permissions.includes('add_article')) {
      return true;
    }

    if(permissions.includes('edit_article')) {
      return true;
    }

    if(permissions.includes('delete_article')) {
      return true;
    }

    return false;
  }

  return false;
};
