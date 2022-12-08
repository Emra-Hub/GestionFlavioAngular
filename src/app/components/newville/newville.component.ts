import { Component, OnInit } from '@angular/core';
import {VillesService} from "../../services/villes.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-newville',
  templateUrl: './newville.component.html',
  styleUrls: ['./newville.component.css']
})
export class NewvilleComponent implements OnInit {
  villeFormGroup?:FormGroup;
  submitted=false;

  constructor(private villesService:VillesService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.villeFormGroup = this.fb.group(
      {
        nom : ["", Validators.required], // --> Obliger de rentrer une valeur avec le validator
        latitude : ["", Validators.required],
        longitude : ["", Validators.required],
        pays : ["", Validators.required]
      }
    )
  }

  saveVille() {
    this.submitted=true;
    if(this.villeFormGroup?.invalid) return;

    alert(this.villeFormGroup?.value.nom + " " +
      this.villeFormGroup?.value.latitude + " " +
      this.villeFormGroup?.value.longitude + " " +
      this.villeFormGroup?.value.pays)

    this.villesService.save(this.villeFormGroup?.value).subscribe({
      next : data => {alert("Ville ajoutée") ; alert("Numero de la ville : "+data.idville)},
      error: error=> {alert("Erreur : "+error.headers.get("error"))}
    });
  }

}
