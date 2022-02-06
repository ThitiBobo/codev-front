import {Injectable} from "@angular/core";

export class User {
  private _id: string;
  private _email: string;
  private _firstname: string
  private _lastname: string


  constructor(id: string, email: string, firstname: string, lastname: string) {
    this._id = id;
    this._email = email;
    this._firstname = firstname;
    this._lastname = lastname;
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
}

@Injectable({
  providedIn: "root",
})
export class RegisterRequestAdapter {
  public static adapt(user: User): any {
    return null
  }
}

