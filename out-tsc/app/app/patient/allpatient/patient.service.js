import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry, shareReplay } from "rxjs/operators";
let PatientService = class PatientService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = '/api/patient/list/';
        this.dataChange = new BehaviorSubject([]);
        this.token = localStorage.getItem('token');
        // Http Options for post form data
        this.httpAuthFormData = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.token,
            })
        };
        // Http Options for get
        this.httpAuthGetJson = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token,
            })
        };
    }
    get data() {
        return this.dataChange.value;
    }
    getDialogData() {
        return this.dialogData;
    }
    /** CRUD METHODS */
    getAllPatients() {
        this.httpClient.get(this.API_URL, this.httpAuthFormData).subscribe(data => {
            this.dataChange.next(data);
            console.log(data);
        }, (error) => {
            console.log(error.name + ' ' + error.message);
        });
    }
    // DEMO ONLY, you can find working methods below
    // addPatient(patient: Patient): void {
    //   this.dialogData = patient;
    // }
    updatePatient(patient) {
        this.dialogData = patient;
    }
    deletePatient(id) {
        console.log(id);
    }
    // Add patient form data from add patinet
    addPatient(formData) {
        return this.httpClient.post('/api/patient/list/', formData, this.httpAuthFormData)
            .pipe(shareReplay({ bufferSize: 1, refCount: true }), retry(1), catchError(this.handleError));
    }
    // get patient form data from add patinet
    getPatient(patientId) {
        return this.httpClient.get('/api/patient/' + patientId, this.httpAuthGetJson)
            .pipe(shareReplay({ bufferSize: 1, refCount: true }), retry(1), catchError(this.handleError));
    }
    // get patient form data from add patinet
    getPatientPastVisits(formData) {
        return this.httpClient.post('/api/patientlog/listbyid/', formData, this.httpAuthFormData)
            .pipe(shareReplay({ bufferSize: 1, refCount: true }), retry(1), catchError(this.handleError));
    }
    // get patient form data from add patinet
    postPatientPastVisits(formData) {
        return this.httpClient.post('/api/patientlog/add/', formData, this.httpAuthFormData)
            .pipe(shareReplay({ bufferSize: 1, refCount: true }), retry(1), catchError(this.handleError));
    }
    // Error handling
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }
};
PatientService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], PatientService);
export { PatientService };
//# sourceMappingURL=patient.service.js.map