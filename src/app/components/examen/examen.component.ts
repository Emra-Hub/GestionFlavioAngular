import { Component, OnInit } from '@angular/core';
import {Coureur} from "../../entities/coureur.entities";
import {CoureursService} from "../../services/coureurs.service";

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {
  coureurs?:Coureur[];
  nom:string|null=null;

  constructor(private coureursServices:CoureursService) { }

  ngOnInit(): void {
  }

  onSearch() {
    if (this.nom!=null) {
      this.coureursServices.getCoureurByNom(this.nom).subscribe({
        next:data=>this.coureurs = data,
        error:error=>alert("Erreur : "+error.headers.get("error"))
      })
    }
    else {
      alert("Vous devez remplir le champ.")
    }
  }
}
