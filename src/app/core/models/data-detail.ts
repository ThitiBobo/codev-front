import {Data} from "./data";
import {Consumption} from "./consumption";

export class DataDetail extends Data{

  private _historic: Consumption[]

  constructor(code: string, metropolis: string, dateHour: Date, consumption: number, historic: Consumption[]) {
    super(code, metropolis, dateHour, consumption);
    this._historic = historic;
  }


  get historic(): Consumption[] {
    return this._historic;
  }

  set historic(value: Consumption[]) {
    this._historic = value;
  }
}
