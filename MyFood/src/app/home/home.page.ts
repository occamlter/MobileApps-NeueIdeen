import { Component, ViewChild } from '@angular/core';
import { Rezept } from '../models/rezepte/rezept.model';
import { User } from '../models/user/user.model';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

/**
 * Autor: Anika Haushälter
 */
export class HomePage {
  readonly seitentitel = "Suche";
  rezepte:Array<Rezept> = new Array();
  filter: Array<Rezept>;
  liste: Array<string>;
  user: User;

  /**
   * @ignore
   * @param firebase {FirebaseService} dependeny injection des FirebaseService
   */
  constructor(
    private firebase: FirebaseService
  ) { 
    //Aufrufen aller Rezepte
    this.rezepte = firebase.getAlleRezepte();
    this.user = firebase.getUser(localStorage.getItem('user'));
    this.liste = firebase.getAlleRezeptIds();
    this.filter = this.rezepte;
  }

  /**
   * Autor: Anika Haushälter
   * Anpassen der Liste filter, damit herausgefilterte Rezepte angezeigt werden
   * @param rezeptListe 
   */
  filterRezepte(rezeptListe: Array<Rezept>){    
    this.filter = rezeptListe;    
  }
}
