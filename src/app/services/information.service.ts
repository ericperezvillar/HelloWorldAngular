import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class InformationService {

  info:any = {};
  team:any = [];

  constructor(public http: Http) {
      this.load_info();
      this.load_about();   

   }

   public load_info(){
    this.http.get("assets/data/info.page.json")
            .subscribe( data => {
                //console.log(data.json());
                this.info = data.json();
            });
   }

   public load_about(){
    this.http.get("https://my-first-portfolio-e1d1e.firebaseio.com/about.json")
            .subscribe( data => {
                //console.log(data.json());
                this.team = data.json();
            });
   }

}
