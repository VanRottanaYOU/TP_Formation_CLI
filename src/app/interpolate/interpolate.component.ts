import { Component, OnInit, EventEmitter } from '@angular/core';
import Formation from '../classes/Formation';

@Component({
  selector: 'app-interpolate',
  templateUrl: './interpolate.component.html',
  styleUrls: ['./interpolate.component.css']
})
export class InterpolateComponent implements OnInit {

  prenom: string = 'Van-Rottana';
  nom: string = 'YOU';

  maformation: Formation = new Formation("Diginamic", "Java Full Stack");

  formationJS: Formation;
  
  isHidden: boolean = false;

  prix: number = 10000;

  /* dateDebut:string="19-11-2014";
  datefin:string="19-11-2015"; */

  dateDebut:Date=new Date();
  datefin:Date=new Date();

  getFullname(): string {
    return "Nom Prénom : " + this.nom + " " + this.prenom;
  }

  getFormation(): string {
    return "Formation : " + this.maformation.nom + " " + this.maformation.description;
  }

  onClick(i): void {
    console.log(i);
    this.isHidden = !this.isHidden;
  }

  constructor() { }

  ngOnInit() {
  }

}
