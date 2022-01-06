import {Adapter} from "./adapter";

export class Data{
  private _code: string
  private _metropolis: string
  private _consumption: number
  private _date_hour: string
  private _date: string
  private _hour: string


  constructor(code: string, metropolis: string, consumption: number, date_hour: string, date: string, hour: string) {
    this._code = code;
    this._metropolis = metropolis;
    this._consumption = consumption;
    this._date_hour = date_hour;
    this._date = date;
    this._hour = hour;
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

  get consumption(): number {
    return this._consumption;
  }

  set consumption(value: number) {
    this._consumption = value;
  }

  get date_hour(): string {
    return this._date_hour;
  }

  set date_hour(value: string) {
    this._date_hour = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  get hour(): string {
    return this._hour;
  }

  set hour(value: string) {
    this._hour = value;
  }
}

export class DataAdapter implements Adapter<Data>{
  public adapt(item: any): Data {
    return new Data(
      item.code,
      item.metropolis,
      item.consumption,
      item.date_hour,
      item.date,
      item.hour
    )
  }
}
