import {Data} from "./data";

export class DataResponse {
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

  get otherData(): Data[] {
    return this._otherData;
  }

  get preferences(): Data[] {
    return this._preferences;
  }


}
