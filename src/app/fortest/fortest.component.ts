import { Component, OnInit } from '@angular/core';
import Formation from '../classes/Formation';

@Component({
  selector: 'app-fortest',
  templateUrl: './fortest.component.html',
  styleUrls: ['./fortest.component.css']
})
export class FortestComponent implements OnInit {

  formations: Array<Formation> = [];
  color:string="blue";
  background:string="yellow";

  getColorByElement(i) {
    if (i==0){
       return 'red' ;
       //this.color = "red";
    }   
    if (i==(this.formations.length)-1){
       return 'green';
      // this.color = "green";
    }
  }

  getColorBackGround(i) {
    if (i%2 ==0){
      return 'grey';
      //this.background ="grey";
    } 
  }

  getIndex1(i){
    if (i==0){
      return 'true' ;
   } 
  }

  getIndex2(i){
    if (i==(this.formations.length)-1){
      return 'true';
   }
  }

  getIndex3(i){
   if (i%2 ==0){
    return 'true';
  }  
  }

  constructor() { }

  ngOnInit() {
    this.formations = [
      new Formation("module", " Angular"),
      new Formation("module", " Java"),
      new Formation("module", " typescript"),
    ]
  }

}
