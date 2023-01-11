import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Coureur} from "../entities/coureur.entities";
import {Ville} from "../entities/ville.entities";

@Injectable({providedIn:"root"})
export class CoureursService {
  private host = environment.host

  constructor(private httpClient:HttpClient) {
  }

  getCoureur(idCoureur:number):Observable<Coureur> {
    return this.httpClient.get<Coureur>(this.host+"/coureurs/"+idCoureur);
  }

  getCoureursVille(idVille:number) : Observable<Coureur[]>{
    return this.httpClient.get<Coureur[]>(this.host+"/coureurs/idville="+idVille);
  }

  updateCoureur(c:Coureur): Observable<Coureur>{
    return this.httpClient.put<Coureur>(this.host+"/coureurs/"+c.idcoureur, c);
  }

  deleteCoureur(c:Coureur): Observable<void>{
    return this.httpClient.delete<void>(this.host+"/coureurs/"+c.idcoureur);
  }

  save(c: Coureur,v:Ville): Observable<Coureur>{
    c.ville=v;
    return this.httpClient.post<Coureur>(this.host+"/coureurs/", c);
  }

  //Question 1
  getCoureurByNom(nom:string):Observable<Coureur[]> {
    return this.httpClient.get<Coureur[]>(this.host+"/coureurs/nom="+nom);
  }
}
