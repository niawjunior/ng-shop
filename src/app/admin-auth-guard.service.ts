import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService) { }

  canActivate(): Observable<boolean> {
    return this.auth.appUser$
      .pipe(map(appUser => appUser.isAdmin));
  }
}
