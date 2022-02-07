import {Injectable} from "@angular/core";
import {DataList} from "./data-list";
import {DatePipe} from "@angular/common";


export class Data {
  private _code : string;
  private _metropolis : string;
  private _dateHour : Date
  private _consumption: number;

  constructor(code: string = "", metropolis: string = "", dateHour: Date, consumption: number = 0) {
    this._code = code
    this._metropolis = metropolis
    this._dateHour = dateHour
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

  get consumption(): number {
    return this._consumption;
  }

  set consumption(value: number) {
    this._consumption = value;
  }

  get dateHour(): Date {
    return this._dateHour;
  }

  set dateHour(value: Date) {
    this._dateHour = value;
  }
}

@Injectable({
  providedIn: "root",
})
export class DataAdapter {

  public static adapt(item: any): Data{
    return new Data(
      item.code,
      item.metropolis,
      new Date(item.date_hour),
      item.consumption
    )
  }
}
