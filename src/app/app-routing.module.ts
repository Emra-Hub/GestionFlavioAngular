import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {VillesComponent} from "./components/villes/villes.component";
import {CoureursComponent} from "./components/coureurs/coureurs.component";
import {ExercicesComponent} from "./components/exercices/exercices.component";
import {NewvilleComponent} from "./components/newville/newville.component";

const routes: Routes = [
  {path : "", component : HomeComponent},
  {path : "villes", component : VillesComponent},
  {path : "coureurs", component : CoureursComponent},
  {path : "exercices", component : ExercicesComponent},
  {path : "newVille", component : NewvilleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
