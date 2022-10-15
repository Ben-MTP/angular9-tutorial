import { Component, OnInit } from '@angular/core';
// import { ComponentIfComponent } from '../component-if/component-if.component';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public age: number | any = 18;

  // public component: ComponentIfComponent | any = new ComponentIfComponent();

  constructor() { }

  ngOnInit(): void {
    
  }

  tangtuoi(): void {
    this.age++;
  }

  giamtuoi(): void{
    this.age--;
  }

}
