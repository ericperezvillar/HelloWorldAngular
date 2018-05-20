import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class InformationService {

  info:any = {};

  constructor(public http: Http) {

    this.http.get("assets/data/info.page.json")
            .subscribe( data => {
                console.log(data.json());
                this.info = data.json();
            });

   }

}
