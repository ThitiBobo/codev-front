import {Injectable} from "@angular/core";

export class User{
  private _id!: string | null;
  private _email: string;
  private _firstname: string
  private _lastname: string

  private _token: string | null
  private _tokenType: string | null


  constructor(id: string | null, email: string, firstname: string, lastname: string,
              token: string | null, tokenType: string | null) {
    this._id = id;
    this._email = email;
    this._firstname = firstname;
    this._lastname = lastname;
    this._token = token;
    this._tokenType = tokenType;
  }


  public get id(): string | null {
    return this._id;
  }

  public set id(value: string | null) {
    this._id = value;
  }

  public get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get firstname(): string {
    return this._firstname;
  }

  set firstname(value: string) {
    this._firstname = value;
  }

  get lastname(): string {
    return this._lastname;
  }

  set lastname(value: string) {
    this._lastname = value;
  }

  get token(): string | null {
    return this._token;
  }

  set token(value: string | null) {
    this._token = value;
  }

  get tokenType(): string | null {
    return this._tokenType;
  }

  set tokenType(value: string | null) {
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
      item.firstname,
      item.lastname,
      item.token,
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
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: password
    }
  }
}
