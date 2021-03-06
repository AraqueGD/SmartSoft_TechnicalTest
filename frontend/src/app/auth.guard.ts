import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ApiService } from './services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private api: ApiService, private router: Router ) {}

  canActivate(): boolean {
    if (this.api.isLogged()) {
      return true;
    }
    this.router.navigate(["login"]);
  }
  
}
