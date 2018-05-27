import { Component } from '@angular/core';
import { InformationService } from '../../services/information.service';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  constructor(public _is: InformationService,
              public router: Router,
              private _ngZone: NgZone) {
    
   }

   
  searchByTerm( term: string){
    this._ngZone.run(() => {
      this.router.navigate(["search",term])
    });
   

  }

}
