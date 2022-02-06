import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Data} from "../models/data";

@Injectable({
  providedIn: 'root'
})
export class DataRepository {

  private path = "/data"

  constructor(private httpClient: HttpClient) { }

  fetchProducts() {
    return this.httpClient.get<Data[]>("/products");
  }
}
