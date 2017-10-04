import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Formation from '../classes/Formation';

@Component({
  selector: 'app-formation-item-out-put',
  templateUrl: './formation-item-out-put.component.html',
  styleUrls: ['./formation-item-out-put.component.css']
})
export class FormationItemOutPutComponent implements OnInit {

  @Input()
  formation:Formation;

  @Output()
  formationSelected:EventEmitter<Formation> = new EventEmitter<Formation>();
  
  selectFormation() {
  this.formationSelected.emit(this.formation);
  }

  constructor() { }

  ngOnInit() {
  }

}
