import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServices {
  private loginApi = 'https://api.escuelajs.co/api/v1/auth/login'
  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string) {
    return this.http.post<{ access_token: string }>(this.loginApi, { email, password })
  }

}
