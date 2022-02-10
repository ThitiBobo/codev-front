import {User} from "./user";
import {Metropolis, MetropolisAdapter} from "./metropolis";
import {Injectable} from "@angular/core";

export class Profile{
  private _user!: User
  private _preferences: Metropolis[]


  constructor(user: User | undefined, preferences: Metropolis[]) {
    if(user) this._user = user
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

@Injectable({
  providedIn: "root",
})
export class ProfileAdapter {

  public static adapt(item: any): Profile{

    var preferences: Metropolis[] = []
    item.forEach((element: any) => {
      preferences.push(MetropolisAdapter.adapt(element))
    })

    return new Profile(
      undefined,
      preferences
    )
  }
}
