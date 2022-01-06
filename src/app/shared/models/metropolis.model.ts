import {Adapter} from "./adapter";
import {Injectable} from "@angular/core";

export class Metropolis {
  private _id: number
  private _code: string
  private _name: string
  private _latitude: number
  private _longitude: number


  constructor(id: number, code: string, name: string, latitude: number, longitude: number) {
    this._id = id;
    this._code = code;
    this._name = name;
    this._latitude = latitude;
    this._longitude = longitude;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get latitude(): number {
    return this._latitude;
  }

  set latitude(value: number) {
    this._latitude = value;
  }

  get longitude(): number {
    return this._longitude;
  }

  set longitude(value: number) {
    this._longitude = value;
  }
}

@Injectable({
  providedIn: "root"
})
export class MetropolisAdapter implements Adapter<Metropolis>{
  adapt(item: any): Metropolis {
    return new Metropolis(
      item.id,
      item.code,
      item.name,
      item.latitude,
      item.longitude
    )
  }
}
