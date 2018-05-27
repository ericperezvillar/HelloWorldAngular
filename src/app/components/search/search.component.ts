import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent  {
 
  term: string = null;

  constructor(private route: ActivatedRoute,
              public _ps: ProductService) { 

      this.route.params.subscribe( parameters => {

        this.term = parameters['term'];
        this.searchItem();
      })
      
  }

  public searchItem(){
        
    if(this.term != null)
    {
        this._ps.searchProduct(this.term);
    }
  }

}
