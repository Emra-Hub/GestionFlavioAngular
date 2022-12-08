import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { HomeComponent } from './components/home/home.component';
import { VillesComponent } from './components/villes/villes.component';
import { CoureursComponent } from './components/coureurs/coureurs.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ExercicesComponent } from './components/exercices/exercices.component';
import { NewvilleComponent } from './components/newville/newville.component';
import { EditvilleComponent } from './components/editville/editville.component';
import { EditcoureurComponent } from './components/editcoureur/editcoureur.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HomeComponent,
    VillesComponent,
    CoureursComponent,
    ExercicesComponent,
    NewvilleComponent,
    EditvilleComponent,
    EditcoureurComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
