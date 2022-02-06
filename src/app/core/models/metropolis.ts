

export class Metropolis {
  private _id : number;
  private _code : string;
  private _name : string;
  private _longitude : number;
  private _latitude : number;

  constructor(id: number, code: string, name: string, longitude: number, latitude: number) {
    this._id = id;
    this._code = code;
    this._name = name;
    this._longitude = longitude;
    this._latitude = latitude;
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

  get longitude(): number {
    return this._longitude;
  }

  set longitude(value: number) {
    this._longitude = value;
  }

  get latitude(): number {
    return this._latitude;
  }

  set latitude(value: number) {
    this._latitude = value;
  }


}
