import {ApiBaseService} from "./api-base.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {Metropolis} from "../models/metropolis";

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends ApiBaseService<Metropolis[]> {
  private path = "profile/metropolises/"

  constructor(private http: HttpClient) {
    super();
  }

  list(): Observable<Metropolis[]> {
    const url = this.apiUrl + this.path

    return this.http.get<any>(url).pipe(map(item => {
      let list: Metropolis[] = [];
      item.forEach((element: any) => {
        list.push(new Metropolis(element.id, element.code, element.name, element.longitude, element.latitude))
      })
      return list;
    }))
  }

  add(idUser : number, idMetropolis : number) {
    const url = this.apiUrl + this.path
    const body = {profileId: idUser.toString(),
    metropolisId: idMetropolis}
    this.http.post<any>(url, body).subscribe()
  }

  delete(idMetropolis : number) {
    const url = this.apiUrl + this.path + idMetropolis.toString()
    this.http.delete<any>(url).subscribe()
  }
}
