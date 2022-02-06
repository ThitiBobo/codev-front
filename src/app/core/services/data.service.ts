import {ApiBaseService} from "./api-base.service";
import {Data} from "../models/data";
//import * as PATH from "path";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {DataResponse} from "../models/dataResponse";

@Injectable({
  providedIn: 'root'
})
export class DataService extends ApiBaseService<Data> {
  private path = "data/"

  constructor(private http: HttpClient) {
    super();
  }

  list(): Observable<DataResponse> {
    const url = this.apiUrl + this.path
    console.log(url)
    var v = this.http.get<any>(url).pipe(
      retry(3), catchError(this.handleError<DataResponse>('data.list', new DataResponse([],[],[]))));
    console.log("v = ", v)
    return v;
  }

}
