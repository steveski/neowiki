import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private jwtHelperService: JwtHelperService) {}

  getUserPermissions(): string[] {
    const token = localStorage.getItem('access_token');
    if(token && !this.jwtHelperService.isTokenExpired(token)) {
      const decodedToken = this.jwtHelperService.decodeToken(token);
      return decodedToken.permissions? decodedToken.permissions.split(',') : [];
    }

    return [];
  }

}
