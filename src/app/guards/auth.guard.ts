import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { first, firstValueFrom, map, of, switchMap, take } from 'rxjs';

export const authGuard: CanActivateFn = async (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  const isAuthenticated = await firstValueFrom(tokenService.isAuthentications.pipe(take(1)));

  if (!isAuthenticated) {
    return router.createUrlTree(['/login']);
  } else {
    return true;
  }
};
