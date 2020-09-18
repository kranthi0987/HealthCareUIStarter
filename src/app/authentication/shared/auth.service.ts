import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, retry, shareReplay} from 'rxjs/operators';
import {RegisterRequestModel} from './registerRequest.model';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient,
              private router: Router) {
  }

  // OBJECT WHICH WILL PASS BODY PARAMETERS
  // var myFormData = new FormData();
  // Headers
  // const headers = new HttpHeaders();
  // headers.append('Content-Type', 'multipart/form-data');
  // headers.append('Accept', 'application/json');
  // Body Paramenters
  // myFormData.append('image', this.filedata);

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  token = localStorage.getItem('token');
  // Http Options
  httpAuth = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token,
    })
  };

  public getProfile(): Observable<any> {
    return this.http.get('/api/profile/', this.httpAuth).pipe(shareReplay({
      bufferSize: 1,
      refCount: true
    }), retry(1), catchError(this.handleError));
  }

  public getContactById(contactId: number): Observable<any> {
    return this.http.get('/api/contacts/' + contactId);
  }

  public postLogin(login): Observable<any> {
    return this.http.post('/api/login/', login).pipe(retry(1), catchError(this.handleError));
  }

  public postRegister(register: RegisterRequestModel): Observable<any> {
    return this.http.post('/api/register/', JSON.stringify(register), this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  public getContacts(): Observable<any> {
    return this.http.get('/api/contacts/');
  }

  get isLoggedIn(): boolean {
    const authToken = localStorage.getItem('token');
    return (authToken !== null) ? true : false;
  }

  doLogout() {
    const removeToken = localStorage.removeItem('token');
    if (removeToken == null) {
      localStorage.removeItem('doc_id');
      localStorage.removeItem('first_name');
      localStorage.removeItem('last_name');
      localStorage.removeItem('email');
      localStorage.removeItem('phone_number');
      localStorage.removeItem('gender');
      localStorage.removeItem('specialist');
      localStorage.removeItem('date_of_birth');
      this.router.navigate(['/auth/login']);
    }
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
