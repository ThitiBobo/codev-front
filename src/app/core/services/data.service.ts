import {ApiBaseService} from "./api-base.service";
import {Data} from "../models/data";
//import * as PATH from "path";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, map, retry} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {DataList, DataListAdapter} from "../models/data-list";

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
        catchError(this.handleError<DataList>('data.list', new DataList([], [], [])))
      ).pipe(
        map( value => DataListAdapter.adapt(value))
      );
  }
}
