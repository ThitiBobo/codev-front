import {Data} from "./data";

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
