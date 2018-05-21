import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styles: []
})
export class ProductItemComponent {

  constructor( private route:ActivatedRoute) {
    this.route.params.subscribe( parameters => {
      console.log(parameters);
      console.log(parameters['cod']);

    })
   }


}
