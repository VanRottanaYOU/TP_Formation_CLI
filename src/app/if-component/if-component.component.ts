import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-component',
  templateUrl: './if-component.component.html',
  styleUrls: ['./if-component.component.css']
})
export class IfComponentComponent implements OnInit {

  isDisplay: boolean = true;

  onClick(): void {
    this.isDisplay = !this.isDisplay;

  }

  constructor() { }

  ngOnInit() {
    
  }

}
