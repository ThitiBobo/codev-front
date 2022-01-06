import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Metropolis, MetropolisAdapter} from "../../shared/models/metropolis.model";
import {ApiBaseService} from "./api-base.service";
import {catchError, map, retry} from "rxjs/operators";


const PATH = 'metropolis/';

@Injectable({
  providedIn: 'root'
})
export class MetropolisService extends ApiBaseService<Metropolis>{

  private path = PATH

  constructor(private http: HttpClient, private adapter: MetropolisAdapter) {
    super();
  }

  list(): Observable<Metropolis[]> {
    const url = this.apiUrl + this.path
    return this.http.get<any[]>(url).pipe(
      map((data: any[]) => data.map((item) => this.adapter.adapt(item))),
      retry(3),
      catchError(this.handleError<Metropolis[]>('category.list', [])));
  }
}
