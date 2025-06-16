import { CanActivateFn } from '@angular/router';
import { access_token } from '../constant';
export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = !!localStorage.getItem(access_token); // or a proper AuthService
  if (isLoggedIn) {
    return true;
  } else {
    return false;
  }
};
