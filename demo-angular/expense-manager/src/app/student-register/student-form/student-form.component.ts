import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  studentForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.createForm();
  }
  createForm(): void{
    this.studentForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      placeOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      educationLevel: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log(this.studentForm.value);
  }

}
