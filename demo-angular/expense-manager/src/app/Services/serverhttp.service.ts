import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})

export class ServerhttpService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token'
    }),
  }

  private REST_API_SERVER = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { 

  }

  public getProfile(): Observable<any>{
    let url = `${this.REST_API_SERVER}/profile`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError))
  }

  public getComment(): Observable<any>{
    let url = `${this.REST_API_SERVER}/comments`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError))
  }

  public getBook(){
    let url = `${this.REST_API_SERVER}/book`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError))
  }

  public createBook(title: any, author: any){
    let url = `${this.REST_API_SERVER}/book`;
    this.httpClient.post(url, {title: title, author: author})
    .subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
        alert('Error creating book');
      }
    );
  }

  public createBookv2(data: any){
    let url = `${this.REST_API_SERVER}/book`;
    return this.httpClient
    .post<any>(url, data, this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}

