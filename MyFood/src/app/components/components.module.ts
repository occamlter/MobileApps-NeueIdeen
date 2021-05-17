import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ListRezeptComponent } from './list-rezept/list-rezept.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ListKochbuchComponent } from './list-kochbuch/list-kochbuch.component';

const PAGES_COMPONENTS = [
  SearchbarComponent,
  ListRezeptComponent,
  NavigationBarComponent,
  ListKochbuchComponent
]

@NgModule({
  declarations: [PAGES_COMPONENTS],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    PAGES_COMPONENTS
  ]
})

export class ComponentsModule { }
