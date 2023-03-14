import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { ServerhttpService } from '../Services/serverhttp.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  bookForm!: FormGroup;
  public name: any;
  public age: any;
  public gender: any;

  public data: any;
  public dataComment: any;
  public dataBook: any;
  
  constructor(
    private common: CommonService,
    private serverHttp: ServerhttpService,
    private formBuilder: FormBuilder
  ) { 
    this.age = common.age;
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.serverHttp.getProfile().subscribe((data) => {
      console.log(data);
      this.data = data;
      this.name = this.data[0].name;
      this.age = this.data[0].age;
      this.gender = this.data[0].gender;});

    this.serverHttp.getComment().subscribe((dataComment) => {
      console.log(dataComment)
      this.dataComment = dataComment;
    });

    this.serverHttp.getBook().subscribe((dataBook) => {
      console.log(dataBook)
      this.dataBook = dataBook;
    });
  }

  onSubmit(): void{
    console.log(this.bookForm.value);
    this.serverHttp.createBook(this.bookForm.value.title, this.bookForm.value.title);
    this.onRefesh();
  }

  onSubmitv2(): void{
    let newData = {title: 'testing', author: 'author testing'};
    this.serverHttp.createBookv2(newData).subscribe((data) => {
      console.log('createBookv2: ', data);
      this.dataBook.push(data);
    });
    // this.onRefesh();
  }

  onRefesh(): void{
    this.serverHttp.getBook().subscribe((dataBook) => {
      this.dataBook = dataBook;
    });
  }

}
