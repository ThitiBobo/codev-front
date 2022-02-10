import {ApiBaseService} from "./api-base.service";
import {Data, DataAdapter} from "../models/data";
//import * as PATH from "path";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, map, retry} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {DataList, DataListAdapter} from "../models/data-list";
import {DataDetail, DataDetailAdapter} from "../models/data-detail";

@Injectable({
  providedIn: 'root'
})
export class DataService extends ApiBaseService<Data> {
  private path = "data/"

  constructor(private http: HttpClient) {
    super();
  }

  list(): Observable<DataList> {
    const url = this.apiUrl + this.path
    return this.http.get<any>(url)
      .pipe(
        retry(3),
        catchError(this.handleError<DataList>('list.list', new DataList([], [], [])))
      ).pipe(
        map(value => DataListAdapter.adapt(value))
      )
  }

  get(code: string): Observable<Data> {
    const url = this.apiUrl + this.path + '/' + code
    return this.http.get<any>(url).pipe(
      map(value => DataAdapter.adapt(value))
    )
  }

  getConsumption(code: string, rows: number, start?: Date, end?: Date): Observable<DataDetail>{
    var url = this.apiUrl + this.path + code + '/' + 'period'
    url = url + '?number=' + rows
    if (start) url = url + "&start=" + start.toString()
    if (end) url = url + "&end=" + end.toString()

    return this.http.get(url).pipe(
      map( value => DataDetailAdapter.adapt(value))
    )
  }
}
