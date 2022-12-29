import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {VillesService} from "../../services/villes.service";
import {ActivatedRoute} from "@angular/router";
import {Coureur} from "../../entities/coureur.entities";
import {CoureursService} from "../../services/coureurs.service";

@Component({
  selector: 'app-editville',
  templateUrl: './editville.component.html',
  styleUrls: ['./editville.component.css']
})
export class EditvilleComponent implements OnInit {
  villeFormGroup?:FormGroup;
  submitted=false;
  idVille:number;
  coureurs?:Coureur[]

  constructor(private villesService:VillesService, private fb:FormBuilder, activatedRoute:ActivatedRoute, private coureursService:CoureursService) {
    this.idVille=activatedRoute.snapshot.params.idville;
  }

  ngOnInit(): void {
    this.villesService.getVille(this.idVille).subscribe(
      ville =>{this.villeFormGroup = this.fb.group({
        idville : [ville.idville, Validators.required],
        nom : [ville.nom, Validators.required],
        latitude : [ville.latitude, Validators.required],
        longitude : [ville.longitude, Validators.required],
        pays : [ville.pays, Validators.required]
        })
      });
  }

  onUpdateVille(): void {
    this.submitted = true;
    if (this.villeFormGroup?.invalid) { return; }

    this.villesService.updateVille(this.villeFormGroup?.value).subscribe({
      next : data => {alert("Mise à jour effectuée")},
      error: error=> {alert("Erreur : "+error.headers.get("error"))}
    });
  }

  onShowCoureursVille() {
    this.coureursService.getCoureursVille(this.idVille).subscribe({
      next : data => this.coureurs = data,
      error : error => alert("Erreur de recherche de coureurs")
    });
  }

  addCoureur($event: Coureur) {
    this.coureurs?.push($event);
  }
}
