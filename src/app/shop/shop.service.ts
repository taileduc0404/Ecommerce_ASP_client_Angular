import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../shared/Models/Pagination';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl="https://localhost:44391/api/";

  constructor(private http: HttpClient) { }

  getProduct(){
    return this.http.get<IPagination>(this.baseUrl + "Products/GetAllProducts");
  }
}
