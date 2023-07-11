import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/enviroment';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API_URL = environment.BASE_URL;
  constructor(private http: HttpClient) {}

  register(data: Partial<User>): Observable<User> {
    return this.http.post<User>(`${this.API_URL}/auth/register`, data);
  }

  login(data: Partial<User>): Observable<User> {
    return this.http.post<User>(`${this.API_URL}/auth/login`, data);
  }
}
