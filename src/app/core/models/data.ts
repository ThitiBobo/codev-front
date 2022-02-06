

export class Data {
  private _code : string;
  private _metropolis : string;
  private _date_hour : string;
  private _consumption: number;

  constructor(code: string = "", metropolis: string = "", date_hour: string = "", consumption: number = 0) {
    this._code = code
    this._metropolis = metropolis
    this._date_hour = date_hour
    this._consumption = consumption
  }


  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get metropolis(): string {
    return this._metropolis;
  }

  set metropolis(value: string) {
    this._metropolis = value;
  }

  get date_hour(): string {
    return this._date_hour;
  }

  set dateHour(value: string) {
    this._date_hour = value;
  }

  get consumption(): number {
    return this._consumption;
  }

  set consumption(value: number) {
    this._consumption = value;
  }



}
