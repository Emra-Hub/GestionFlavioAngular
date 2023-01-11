import { Component, OnInit } from '@angular/core';
import {VillesService} from "../../services/villes.service";
import {Ville} from "../../entities/ville.entities";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Coureur} from "../../entities/coureur.entities";
import {CoureursService} from "../../services/coureurs.service";

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.css']
})
export class ExercicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
