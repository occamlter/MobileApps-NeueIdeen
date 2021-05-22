import { Component, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  rezept1 = {
    "anzahl": 312, 
    "bewertung": 3.5, 
    "favorit": true
  };
  rezept2=  {
    "titel": "Titel",
    "bewertung": 4, 
    "favorit": false
  };
  rezept3= {
    "titel": "Rezept",
    "anzahl": 511, 
    "favorit": true
  };
  rezept4 ={
    "titel": "Rezept 4",
    "anzahl": 622, 
    "bewertung": 5, 
  };
  rezepte = [this.rezept1, this.rezept2, this.rezept3, this.rezept4];
  
  constructor (
    private auth: AngularFireAuth,
    private router: Router,
    private logging: HelperService
  ) {}

  logout () {
    this.auth.signOut().then(() => {
      this.router.navigateByUrl("/login");
    }).catch(e => {
      this.logging.logging(e);
    });
  }
}
