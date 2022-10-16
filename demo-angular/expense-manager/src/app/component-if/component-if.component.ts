import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-component-if',
  templateUrl: './component-if.component.html',
  styleUrls: ['./component-if.component.css']
})
export class ComponentIfComponent implements OnInit {

  private empCode: string | any;
  private empName: string | any;

  public age: number = 10;

  public listEmployeeCode: number[] = [];
  public listEmployee: Employee[] = [];
  public vehicles = ['', '', '', '', '', ''];

  /**
   * Hàm khởi tạo với Common If
   * @param common Biến sử dụng để gọi đến CommonService
   */
  constructor(private common: CommonService) {
    this.age = common.age;
  }

  @Input() size!: number | string;
  @Output() sizeChange = new EventEmitter<number>();
  dec(){this.resize(-1);}
  inc(){this.resize(+1);}

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, + this.size + delta));
    this.sizeChange.emit(this.size);
  }

  ngOnInit(): void {
    
    for (let index = 0; index < 100; index++) {
      this.listEmployeeCode.push(index);
      this.listEmployee.push(new Employee(index, "ManhKM_" + index));
    }
  }


}

class Employee{
  empCode: number;
  empName: string;

  constructor(empcode: number, name: string){
    this.empCode = empcode;
    this.empName = name;
  }

  public getEmpCode(): number{
    return this.empCode;
  }

  public showInfo(): string{
    return this.empCode + " - " + this.empName;
  }
}

let emp = new Employee(12345, "Khong Minh Manh");
