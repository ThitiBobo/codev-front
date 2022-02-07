import {Injectable} from "@angular/core";

export class User {
  private _id: string;
  private _email: string;
  private _firstname: string
  private _lastname: string

  private _token: string
  private _tokenType: string


  constructor(id: string, email: string, firstname: string, lastname: string, token: string, tokenType: string) {
    this._id = id;
    this._email = email;
    this._firstname = firstname;
    this._lastname = lastname;
    this._token = token;
    this._tokenType = tokenType;
  }

  get firstname(): string {
    return this._firstname;
  }

  set firstname(value: string) {
    this._firstname = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get lastname(): string {
    return this._lastname;
  }

  set lastname(value: string) {
    this._lastname = value;
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }

  get tokenType(): string {
    return this._tokenType;
  }

  set tokenType(value: string) {
    this._tokenType = value;
  }
}

@Injectable({
  providedIn: "root",
})
export class UserAdapter {
  public static adapt(item: any): User {
    return new User(
      item.id,
      item.email,
      item.username,
      item.username,
      item.accessToken,
      item.tokenType
    )
  }
}

@Injectable({
  providedIn: "root",
})
export class RegisterRequestAdapter {
  public static adapt(user: User, password: string): any {
    return {
      username: user.firstname,
      email: user.email,
      password: password
    }
  }
}
