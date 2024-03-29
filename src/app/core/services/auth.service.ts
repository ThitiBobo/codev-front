import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {RegisterRequestAdapter, User, UserAdapter} from "../models/user";
import {environment} from "../../../environments/environment";

@Injectable({providedIn: 'root'})
export class AuthService {

  private userSubject!: BehaviorSubject<User | null>;
  public user!: Observable<User | null>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    const value = JSON.parse(<string>localStorage.getItem('user'))
    if (value) {
      const u = new User(
        value._profileId,
        value._id,
        value._email,
        value._firstname,
        value._lastname,
        value._token,
        value._tokenType)
      this.userSubject = new BehaviorSubject<User | null>(u)
    }else{
      this.userSubject = new BehaviorSubject<User | null>(null)
    }

    this.user = this.userSubject.asObservable()
  }

  public isUserExist(): boolean {
    return localStorage.getItem('user') != undefined
  }
  public get userValue(): User | null {
    return this.userSubject.value;
  }

  set userValue(user) {
    this.userSubject.next(user)
    localStorage.setItem('user', JSON.stringify(user));
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, {email, password})
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
    return this.http.post(`${environment.apiUrl}/auth/register`, item)
      .pipe(map(item => {
        let user = UserAdapter.adapt(item)
        this.userValue = user
        return user;
      }));
  }
}
