import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-template',
  templateUrl: './pipe-template.component.html',
  styleUrls: ['./pipe-template.component.css']
})
export class PipeTemplateComponent implements OnInit {

  public age: number = 19;
  public fullName: string = "Khổng Minh Mạnh";
  public address: string = "Thái Bình - Việt Nam";
  protected salary: number = 20000;
  protected dateOfBirth: string = "30/04/1996";
  protected vehicles = ['Toyota', 'Honda', 'Nissan'];
  

  constructor() { }

  ngOnInit(): void {
  }

}
