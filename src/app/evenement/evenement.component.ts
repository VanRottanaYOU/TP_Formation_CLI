import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

  entrer($event):void{
    console.log('MOUSE_OVER', $event);
  }

  sortir($event):void{
    console.log('MOUSE_OUT', $event);
  }

  constructor() { }

  ngOnInit() {
  }

}
