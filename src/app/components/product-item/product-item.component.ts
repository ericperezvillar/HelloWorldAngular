import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styles: []
})
export class ProductItemComponent {

  cod:string;
  productDetail: any = undefined;

  constructor( private route:ActivatedRoute,
              private _ps: ProductService) {
      this.route.params.subscribe( parameters => {
        this.cod = parameters['cod'];
  
      })
     
      this.getProductDetail(this.cod);         
   }

    public getProductDetail(code:string){
        
      if(this.productDetail == undefined)
      {
          this._ps.load_product_detail(this.cod ).subscribe(prodDetail =>{
            this.productDetail = prodDetail.json();
        }); 
      }
    }


}
