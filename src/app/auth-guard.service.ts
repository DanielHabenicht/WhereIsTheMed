import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  private bearer: string | null = null;
  constructor(private router: Router, private httpClient: HttpClient) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.bearer == null) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }

  authenticate(username: string, password: string) {
    this.httpClient
      .post<any>('/api/authenticate', {
        username: username,
        password: password
      })
      .subscribe(r => {
        this.bearer = r.id_token;
      });
  }

  public getToken(): string {
    return this.bearer;
  }
}
