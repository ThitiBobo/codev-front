import {Data, DataAdapter} from "./data";
import {Consumption, ConsumptionAdapter} from "./consumption";
import {Injectable} from "@angular/core";

export class DataDetail extends Data{

  private _history: Consumption[]

  constructor(code: string, metropolis: string, dateHour: Date, consumption: number, history: Consumption[]) {
    super(code, metropolis, dateHour, consumption);
    this._history = history;
  }


  get history(): Consumption[] {
    return this._history;
  }

  set history(value: Consumption[]) {
    this._history = value;
  }
}

@Injectable({
  providedIn: "root",
})
export class DataDetailAdapter {

  public static adapt(item: any): DataDetail{

    var history: Consumption[] = []
    item.historic.forEach((element: any) => {
      history.push(ConsumptionAdapter.adapt(element))
    })
    return new DataDetail(
      item.code,
      item.metropolis,
      item.date_hour,
      item.consumption,
      history)
  }
}
