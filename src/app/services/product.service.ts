import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  products:any[] = [];
  filterProducts: any[] = [];
  loading:boolean = true;

  constructor(private http: Http) { 
    this.load_products();
  }

  public searchProduct(term:string)
  {


    if(this.products.length == 0)
    {
      this.load_products().then(()=>{
        this.filterProductsBySearch(term);

      })
    }
    else{
      this.filterProductsBySearch(term);
    }
     

      

  }

  private filterProductsBySearch(searchTerm: string){
    this.filterProducts = [];

    this.products.forEach(prod => {
      if(prod.category.toLocaleUpperCase().indexOf(searchTerm.toLocaleUpperCase()) >= 0 || prod.title.toLocaleUpperCase().indexOf(searchTerm.toLocaleUpperCase()) >= 0 )
        this.filterProducts.push(prod);

    });

  }

  public load_products(){
    this.loading = true;
    let myFirstPromise = new Promise((resolve, reject) => {
      // do something asynchronous which eventually calls either:
      this.http.get("https://my-first-portfolio-e1d1e.firebaseio.com/product_idx.json")
      .subscribe(data => {
          this.products = data.json();
          this.loading = false;
          resolve(); 
      });
    });

   return myFirstPromise;

  }

  public load_product_detail (cod:string){
    // if (this.product_details == undefined) {
      return this.http.get("https://my-first-portfolio-e1d1e.firebaseio.com/product/"+cod+".json");
    //}

  }

}
