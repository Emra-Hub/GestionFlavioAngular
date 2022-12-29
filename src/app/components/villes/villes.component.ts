import { Component, OnInit } from '@angular/core';
import {VillesService} from "../../services/villes.service";
import {Ville} from "../../entities/ville.entities";
import {Router} from "@angular/router";

@Component({
  selector: 'app-villes',
  templateUrl: './villes.component.html',
  styleUrls: ['./villes.component.css']
})
export class VillesComponent implements OnInit {
  ville:Ville|null=null;
  numrech:number=0;
  villes?:Ville[];

  constructor(private villesService:VillesService, private router:Router) { }

  ngOnInit(): void {
    //this.onSearchById(1);
  }

  onSearch(value: any) {
    this.villesService.getVilleNom(value.nom).subscribe({
      next:data=>{this.villes=data},
      error:error=> {alert("Erreur : "+error.headers.get("error"))}
    })
  }

  onNewVille() {
    this.router.navigateByUrl("newVille");
  }

  onEdit(v: Ville) {
    this.router.navigateByUrl("editVille/"+v.idville);
  }

  onDelete(v: Ville) {
    let c = confirm("Êtes vous sûr de vouloir supprimer ?");
    if (c) {
      this.villesService.deleteVille(v).subscribe({
        next : data => {/*this.onSearch(v);*/
          //rafraîchissement de la page actuelle
          //la solution ci-dessous permet de ne pas recharger la liste à partir du backend
          const index = this.villes?.indexOf(v, 0); //élement à rechercher, position de départ de la recherche
          alert("index = "+index);
          if (!(index === undefined) && index > -1) {
            this.villes?.splice(index, 1);//position de l'élément à ôter,nombre d'éléments à ôter
          };
          alert("Suppression effectuée");},
        error: error=> {alert("Erreur : "+error.headers.get("error"))}
      });
    }
  }

  /* Ce qu'on avait fait à l'introduction du cours

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
      next:data=>{this.villes=data},
      error:error=> {alert("Erreur : "+error.headers.get("error"))}
    })
  }

  suppVille(v: Ville) {
    this.villesService.deleteVille(v).subscribe({
      next: data => {
        alert("Record effacé");
        //this.rechParNomForm(v);
        const index = this.villes?.indexOf(v,0);
        if ((!(index === undefined)) && index > -1) {
          this.villes?.splice(index,1);
        }
      },
      error: error => {alert("Erreur d'effacement : " + error.headers.get("error"))}
    })
  }*/
}
