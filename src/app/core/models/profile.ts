import {User} from "./user";
import {Metropolis} from "./metropolis";

export class Profile{
  private _user: User
  private _preferences: Metropolis[]


  constructor(user: User, preferences: Metropolis[]) {
    this._user = user;
    this._preferences = preferences;
  }


  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get preferences(): Metropolis[] {
    return this._preferences;
  }

  set preferences(value: Metropolis[]) {
    this._preferences = value;
  }
}
