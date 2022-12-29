import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Coureur} from "../../entities/coureur.entities";
import {CoureursService} from "../../services/coureurs.service";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-newcoureur',
  templateUrl: './newcoureur.component.html',
  styleUrls: ['./newcoureur.component.css']
})
export class NewcoureurComponent implements OnInit {
  @Input() viact?:FormGroup;
  @Output() newCoureur=new EventEmitter<Coureur>(); //Notification qui devra être envoyée au niveau supérieur (parent)
  coureurFormGroup?: FormGroup;
  submitted = false;
  co?:Coureur;

  constructor(private coureursServices:CoureursService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.coureurFormGroup = this.fb.group({
      matricule : ["",Validators.required],
      nom : ["",Validators.required],
      prenom : ["",Validators.required],
      datenaiss : [formatDate(new Date(), 'yyyy-MM-dd', 'en'), Validators.required],
      nationalite : ["",Validators.required]
    });
  }

  onSaveCoureur(): void {
    this.submitted = true;
    if(this.coureurFormGroup?.invalid) return;

    this.coureursServices.save(this.coureurFormGroup?.value,this.viact?.value).subscribe({
      next : data => {alert("Coureur ajouté") ; this.co=data ; this.newCoureur.emit(data)},
      error: error=> {alert("Erreur : "+error.headers.get("error"))}
    });
  }
}
