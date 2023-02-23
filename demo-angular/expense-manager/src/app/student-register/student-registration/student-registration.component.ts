import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  student: Student = new Student();
  
  onSubmit() {
    console.log("Log hiển thị thông tin đăng ký của sinh viên");
    
    console.log(this.student)
  }

}
