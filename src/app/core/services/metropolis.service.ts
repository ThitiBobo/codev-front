import {ApiBaseService} from "./api-base.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, map, retry} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {MetropolisResponse} from "../models/profileMetropolis";
import {Metropolis} from "../models/metropolis";

@Injectable({
  providedIn: 'root'
})
export class MetropolisService extends ApiBaseService<MetropolisResponse> {
  private path = "metropolis/"

  constructor(private http: HttpClient) {
    super();
  }

  list(): Observable<Metropolis[]> {
    const url = this.apiUrl + this.path
    console.log(url)

    return this.http.get<any>(url).pipe(map(item => {
      let list: Metropolis[] = [];
      item.forEach((element: any) => {
        list.push(new Metropolis(element.id, element.code, element.nom, element.longitude, element.latitude))
      })
      return list;
    }))
  }
}
