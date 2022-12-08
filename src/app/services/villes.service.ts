import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Ville} from "../entities/ville.entities";
import {Observable} from "rxjs";

@Injectable({providedIn:"root"})
export class VillesService {
  private host = environment.host

  constructor(private httpClient:HttpClient) {
  }

  getVille(idVille:number):Observable<Ville> {
    return this.httpClient.get<Ville>(this.host+"/villes/"+idVille);
  }

  getVilleNom(nom:string):Observable<Ville[]> {
    return this.httpClient.get<Ville[]>(this.host+"/villes/nom="+nom);
  }

  deleteVille(ville:Ville):Observable<void> {
    return this.httpClient.delete<void>(this.host+"/villes/"+ville.idville);
  }

  save(v:Ville): Observable<Ville>{
    return this.httpClient.post<Ville>(this.host +"/villes", v);
  }

  updateVille(v:Ville): Observable<Ville>{
    return this.httpClient.put<Ville>(this.host +"/villes/"+v.idville, v);
  }
}
