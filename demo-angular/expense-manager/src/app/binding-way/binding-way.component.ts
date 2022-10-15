import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-way',
  templateUrl: './binding-way.component.html',
  styleUrls: ['./binding-way.component.css']
})
export class BindingWayComponent implements OnInit {

  public myName: string | any = "Khổng Minh Mạnh";

  public number1: number | any = 0;
  public number2: number | any = 0;
  public operator: string | any = "+";
  public result: number | any;

  constructor() { }

  ngOnInit(): void {
  }

  onExecute(): number{
    console.log(this.number1);
    console.log(this.number2);
    console.log(this.operator);
    
    if(this.operator = "+"){
      this.result = this.number1 + this.number2
    } else if(this.operator = "-"){
      this.result = this.number1 - this.number2
    } else if(this.operator = "*"){
      this.result = this.number1 * this.number2
    } else if(this.operator = "/"){
      this.result = this.number1 / this.number2
    }
    return this.result;
  }

}
