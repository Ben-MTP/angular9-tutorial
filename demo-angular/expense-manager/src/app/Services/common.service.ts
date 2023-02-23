import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public age: number = 10;

  constructor() {
    console.log("Init method Constructor in CommonService");
    console.log("Current Age: " + this.age);
    
  }

  public tangTuoi(): void{
    this.age++;
    console.log(this.age);
  }

  public giamTuoi(): void{
    this.age--;
    console.log(this.age);
    
  }
}
