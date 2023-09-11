import { CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';

export const privilegedGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const hasPrivilege = userService.hasClaim('privileged');
  if(!hasPrivilege) {
    //Navigate to an unauthorised page or home page
    //router.navigate(['unauthorized']);
    return false;
  }

  return true;
};
