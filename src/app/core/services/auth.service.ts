import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {RegisterRequestAdapter, User, UserAdapter} from "../models/user";
import {environment} from "../../../environments/environment";

@Injectable({ providedIn: 'root' })
export class AuthService {

  private userSubject!: BehaviorSubject<User>;
  public user!: Observable<User>;

  constructor(
    private router: Router,
    private http: HttpClient
  ){

    this.userSubject = new BehaviorSubject<User>(JSON.parse(<string>localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();

  }

  public isUserExist(): boolean{
    return localStorage.getItem('user') != undefined
  }
  public get userValue(): User {
    return this.userSubject.value;
  }

  set userValue(user){
    this.userSubject.next(user)
    localStorage.setItem('user', JSON.stringify(user));
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, { email, password })
      .pipe(map(item => {
        let user = UserAdapter.adapt(item)
        this.userValue = user
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('user');
    // @ts-ignore
    this.userSubject.next(null);
    this.router.navigate(['/']);
  }

  register(user: User, password: string) {
    let item = RegisterRequestAdapter.adapt(user, password)
    return this.http.post(`${environment.apiUrl}/auth/register`, item);
  }
}
