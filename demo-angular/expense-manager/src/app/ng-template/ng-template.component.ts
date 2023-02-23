import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.css']
})
export class NgTemplateComponent implements OnInit {

  public age: number = 18;
  constructor() { }

  ngOnInit(): void {
  }

  public tangtuoi(){
    this.age++;
  }

  public giamtuoi(){
    this.age--;
  }

}
