import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-service-template',
  templateUrl: './service-template.component.html',
  styleUrls: ['./service-template.component.css']
})
export class ServiceTemplateComponent implements OnInit {

  protected age: number = 20;

  constructor(protected common: CommonService) {  // Khai báo mội biến common có kiểu là CommonService
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
