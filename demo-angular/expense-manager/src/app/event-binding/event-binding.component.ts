import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
// import { ComponentIfComponent } from '../component-if/component-if.component';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public age: number | any = 18;

  // public component: ComponentIfComponent | any = new ComponentIfComponent();

  constructor(private common: CommonService) {
    this.age = common.age;
  }

  ngOnInit(): void {
    
  }

  tangtuoi(): void {
    this.common.age++;
    this.age = this.common.age;
  }

  giamtuoi(): void{
    this.common.age--;
    this.age = this.common.age;
  }

}
