import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private jwtHelperService: JwtHelperService) {}

  isUserAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    if(!token || this.jwtHelperService.isTokenExpired())
      return false;

    return true;
  }

  hasClaim(claim: string): boolean {
    const token = localStorage.getItem('access_token');

    if(token && !this.jwtHelperService.isTokenExpired(token)) {
      const decodedToken = this.jwtHelperService.decodeToken(token);
      const claimValue = decodedToken[claim];
      if(!claimValue)
        return false;

      return true;
    }
    return false;
  }

  getUserPermissions(): string[] {
    const token = localStorage.getItem('access_token');
    if(token && !this.jwtHelperService.isTokenExpired(token)) {
      const decodedToken = this.jwtHelperService.decodeToken(token);
      return decodedToken.permissions? decodedToken.permissions.split(',') : [];
    }

    return [];
  }

  hasPermission(permission: string): boolean {
    const permissions = this.getUserPermissions();
    return permissions.includes(permission);
  }

}
