import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-pipe',
  templateUrl: './component-pipe.component.html',
  styleUrls: ['./component-pipe.component.css']
})
export class ComponentPipeComponent implements OnInit {

  public age: number | any = 1234.43232323232;

  constructor() { }

  ngOnInit(): void {
  }

}
