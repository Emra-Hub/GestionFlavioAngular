import { Component, OnInit } from '@angular/core';
import {VillesService} from "../../services/villes.service";
import {Ville} from "../../entities/ville.entities";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.css']
})
export class ExercicesComponent implements OnInit {
  villeFormGroup?:FormGroup;
  submitted=false;

  constructor(private villesService:VillesService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.villeFormGroup = this.fb.group(
      {
        nom : ["",Validators.required], // --> Obliger de rentrer une valeur avec le validator
        latitude : ["",Validators.required],
        longitude : ["",Validators.required],
        pays : ["",Validators.required],
      }
    )
  }

  saveVille() {
    this.submitted=true;
    if(this.villeFormGroup?.invalid) alert("Encodage invalide")
    else {
      alert(this.villeFormGroup?.value.nom + " " +
        this.villeFormGroup?.value.latitude + " " +
        this.villeFormGroup?.value.longitude + " " +
        this.villeFormGroup?.value.pays)

      this.villesService.save(this.villeFormGroup?.value).subscribe(data =>
          alert("Ville ajoutée"),
        err => {alert(err.headers.get("error"));}
      );
    }
  }
}
