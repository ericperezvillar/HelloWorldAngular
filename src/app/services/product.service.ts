import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  products:any[] = [];

  constructor(private http: Http) { 
    this.load_products();
  }

  public load_products(){
    this.http.get("https://my-first-portfolio-e1d1e.firebaseio.com/product_idx.json")
            .subscribe(data => {
                this.products = data.json();
                console.log(data.json());

            });
  }

}
