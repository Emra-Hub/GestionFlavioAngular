import { Component, OnInit } from '@angular/core';
import {Coureur} from "../../entities/coureur.entities";
import {CoureursService} from "../../services/coureurs.service";

@Component({
  selector: 'app-coureurs',
  templateUrl: './coureurs.component.html',
  styleUrls: ['./coureurs.component.css']
})
export class CoureursComponent implements OnInit {
  coureur:Coureur|null=null;
  idcoureur:number=0;

  constructor(private coureursServices:CoureursService) { }

  ngOnInit(): void {
  }

  onSearch() {
    this.coureur=null;
    this.coureursServices.getCoureur(this.idcoureur).subscribe({
      next:data=>this.coureur = data,
      error:error=>alert("Erreur : "+error.headers.get("error"))
    })
  }

}
