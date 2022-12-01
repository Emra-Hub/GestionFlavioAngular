import {Ville} from "./ville.entities";

export interface Coureur {
  idcoureur:number,
  matricule:string,
  nom:string,
  prenom:string,
  datenaiss:Date,
  nationalite:string,
  ville:Ville
}
