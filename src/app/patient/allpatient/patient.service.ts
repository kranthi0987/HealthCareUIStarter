import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {Patient} from './patient.model';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, retry, shareReplay} from "rxjs/operators";

@Injectable()
export class PatientService {
  constructor(private httpClient: HttpClient) {
  }

  get data(): Patient[] {
    return this.dataChange.value;
  }

  private readonly API_URL = '/api/patient/list/';
  dataChange: BehaviorSubject<Patient[]> = new BehaviorSubject<Patient[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;

  token = localStorage.getItem('token');
  // Http Options for post form data
  httpAuthFormData = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + this.token,
    })
  };

  // Http Options for get
  httpAuthGetJson = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token,
    })
  };

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getAllPatients(): void {
    this.httpClient.get<Patient[]>(this.API_URL, this.httpAuthFormData).subscribe(
      data => {
        this.dataChange.next(data);
        console.log(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      }
    );
  }

  // DEMO ONLY, you can find working methods below
  // addPatient(patient: Patient): void {
  //   this.dialogData = patient;
  // }
  updatePatient(patient: Patient): void {
    this.dialogData = patient;
  }

  deletePatient(id: number): void {
    console.log(id);
  }

  // Add patient form data from add patinet
  public addPatient(formData): Observable<any> {
    return this.httpClient.post('/api/patient/list/', formData, this.httpAuthFormData)
      .pipe(shareReplay({bufferSize: 1, refCount: true}), retry(1),
        catchError(this.handleError));
  }

  // get patient form data from add patinet
  public getPatient(patientId): Observable<any> {
    return this.httpClient.get('/api/patient/' + patientId, this.httpAuthGetJson)
      .pipe(shareReplay({bufferSize: 1, refCount: true}), retry(1),
        catchError(this.handleError));
  }

  // get patient form data from add patinet
  public getPatientPastVisits(formData): Observable<any> {
    return this.httpClient.post('/api/patientlog/listbyid/', formData, this.httpAuthFormData)
      .pipe(shareReplay({bufferSize: 1, refCount: true}), retry(1),
        catchError(this.handleError));
  }

  // get patient form data from add patinet
  public postPatientPastVisits(formData): Observable<any> {
    return this.httpClient.post('/api/patientlog/add/', formData, this.httpAuthFormData)
      .pipe(shareReplay({bufferSize: 1, refCount: true}), retry(1),
        catchError(this.handleError));
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
