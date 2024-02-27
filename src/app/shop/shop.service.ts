import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../shared/Models/Pagination';
import { ICategory } from '../shared/Models/Categories';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl="https://localhost:44391/api/";

  constructor(private http: HttpClient) { }

  getProduct(categoryId?:number, sort?:string){
    let params= new HttpParams();
    if(categoryId){
      params.append('categoryId', categoryId.toString());
    }
    if(sort){
      params=params.append('sort', sort);
    }
    return this.http.get<IPagination>(this.baseUrl + "Products/GetAllProducts", {observe:'response', params})
    .pipe(
      map(response=>{
        return response.body;
      })
    );
  }

  getCategory(){
    return this.http.get<ICategory[]>(this.baseUrl + "Categories/GetAllCategory");
  }
}
