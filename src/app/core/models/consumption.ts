
export class Consumption{

  private _consumption: number
  private _date: Date


  constructor(consumption: number, date: Date) {
    this._consumption = consumption;
    this._date = date;
  }


  get consumption(): number {
    return this._consumption;
  }

  set consumption(value: number) {
    this._consumption = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }
}
