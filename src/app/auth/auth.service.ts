import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants';
import { Observable } from 'rxjs';
import { LoginResultModel } from '../../models/auth/login-result.model';

@Injectable()
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  public login(email: string, password: string): Observable<LoginResultModel> {
    return this.http.post<LoginResultModel>(`${API_URL}/auth/login`, { email, password });
  }
}
