import { HttpClient, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'Ecommerce_ASP_client_Angular';
  baseUrl="";
  products : [] = [];


  /**
   *
   */
  constructor(private http:HttpClient) {
    
  }

  getProduct(){
    return this.http.get(this.baseUrl).subscribe(
      (values:any)=>{
        this.products=values;
      }
    )
  }

  ngOnInit(): void {
    this.getProduct();
  }
}
