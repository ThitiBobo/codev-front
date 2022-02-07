import {Data, DataAdapter} from "./data";
import {Injectable} from "@angular/core";
import {User} from "./user";

export class DataList {
  private _recentData : Data[];
  private _otherData : Data[];
  private _preferences : Data[];

  constructor(recentData: Data[], otherData: Data[], preferences: Data[]) {
    this._recentData = recentData;
    this._otherData = otherData;
    this._preferences = preferences;
  }

  get recentData(): Data[] {
    return this._recentData;
  }

  set recentData(value: Data[]) {
    this._recentData = value;
  }

  get otherData(): Data[] {
    return this._otherData;
  }

  set otherData(value: Data[]) {
    this._otherData = value;
  }

  get preferences(): Data[] {
    return this._preferences;
  }

  set preferences(value: Data[]) {
    this._preferences = value;
  }
}

@Injectable({
  providedIn: "root",
})
export class DataListAdapter {
  public static adapt(item: any): DataList{

    var recentData: Data[] = []
    item.recentData.forEach((element: any) => {
      recentData.push(DataAdapter.adapt(element))
    })

    var otherData: Data[] = []
    item.otherData.forEach((element: any) => {
      otherData.push(DataAdapter.adapt(element))
    })

    var preferences: Data[] = []
    item.preferences.forEach((element: any) => {
      preferences.push(DataAdapter.adapt(element))
    })

    return new DataList(
      recentData,
      otherData,
      preferences
    )
  }
}
