import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Coureur} from "../../entities/coureur.entities";
import {CoureursService} from "../../services/coureurs.service";

@Component({
  selector: 'app-editcoureur',
  templateUrl: './editcoureur.component.html',
  styleUrls: ['./editcoureur.component.css']
})
export class EditcoureurComponent implements OnInit {
  coureurFormGroup?:FormGroup;
  submitted=false;
  @Input() coureur?:Coureur;
  deleted=false;

  constructor(private coureursServices:CoureursService, private fb:FormBuilder) {

  }

  ngOnInit(): void {
    this.coureurFormGroup = this.fb.group({
      idcoureur : [this.coureur?.idcoureur],
      matricule : [this.coureur?.matricule, Validators.required],
      nom : [this.coureur?.nom, Validators.required],
      prenom : [this.coureur?.prenom, Validators.required],
      datenaiss : [this.coureur?.datenaiss, Validators.required],
      nationalite : [this.coureur?.nationalite, Validators.required]
    });
  }

  onUpdateCoureur(): void {
    this.submitted = true;
    if (this.coureurFormGroup?.invalid) {return;}

    let coureurmaj:Coureur=this.coureurFormGroup?.value;
    if(this.coureur) {
      coureurmaj.ville = this.coureur.ville; //car le formulaire ne donne une valeur qu' aux champs propres du coureur
      this.coureursServices.updateCoureur(this.coureurFormGroup?.value).subscribe({
        next : data => {alert("Mise à jour effectuée")},
        error: error=> {alert("Erreur : "+error.headers.get("error"))}
      });
    }
  }

  onDeleteCoureur() {
    let v = confirm("Êtes vous sûr de vouloir supprimer ?");
    if (v) {
      this.coureursServices.deleteCoureur(this.coureurFormGroup?.value).subscribe({
          next : data => {alert("Suppression effectuée") ; this.deleted=true;},
          error: error=> {alert("Erreur : "+error.headers.get("error"))}
        });
    }
  }
}
