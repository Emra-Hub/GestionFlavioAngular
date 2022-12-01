import { Component, OnInit } from '@angular/core';
import {VillesService} from "../../services/villes.service";
import {Ville} from "../../entities/ville.entities";

@Component({
  selector: 'app-villes',
  templateUrl: './villes.component.html',
  styleUrls: ['./villes.component.css']
})
export class VillesComponent implements OnInit {
  ville:Ville|null=null;
  numrech:number=0;
  villesTrouv?:Ville[];

  constructor(private villesService:VillesService) { }

  ngOnInit(): void {
    this.onSearchById(1);
  }

  onSearchById(idville:number) {
    this.villesService.getVille(idville).subscribe({
      next:data=>alert(data.nom),
      error:error=>alert(error)
    })
  }

  recherche() {
    this.ville=null;
    this.villesService.getVille(this.numrech).subscribe({
      next:data=>this.ville = data,
      error:error=>alert("Erreur : "+error.headers.get("error"))
    })
  }

  rechParForm(value: any) {
    let numero:number = value.numero;
    this.villesService.getVille(numero).subscribe({
      next:data=>this.ville=data,
      error:error=> {alert("Erreur : "+error.headers.get("error")) ; this.ville=null;}
    })
  }

  rechParNomForm(value: any) {
    let nom:string = value.nom;
    this.villesService.getVilleNom(nom).subscribe({
      next:data=>{this.villesTrouv=data},
      error:error=> {alert("Erreur : "+error.headers.get("error"))}
    })
  }

  suppVille(v: Ville) {
    this.villesService.deleteVille(v).subscribe({
      next: data => {
        alert("Record effacé");
        //this.rechParNomForm(v);
        const index = this.villesTrouv?.indexOf(v,0);
        if ((!(index === undefined)) && index > -1) {
          this.villesTrouv?.splice(index,1);
        }
      },
      error: error => {alert("Erreur d'effacement : " + error.headers.get("error"))}
    })
  }
}
