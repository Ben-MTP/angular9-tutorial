import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.css']
})
export class NgTemplateComponent implements OnInit {

  public age: number = 18;
  constructor(private common: CommonService) {
    this.age = common.age;
  }

  ngOnInit(): void {
  }

  public tangtuoi(){
    this.common.tangTuoi();
    this.age = this.common.age;
  }

  public giamtuoi(){
    this.common.giamTuoi();
    this.age = this.common.age;
  }

}
