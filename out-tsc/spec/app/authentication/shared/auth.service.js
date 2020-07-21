import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        // OBJECT WHICH WILL PASS BODY PARAMETERS
        // var myFormData = new FormData();
        // Headers
        // const headers = new HttpHeaders();
        // headers.append('Content-Type', 'multipart/form-data');
        // headers.append('Accept', 'application/json');
        // Body Paramenters
        // myFormData.append('image', this.filedata);
        // Http Options
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        this.token = localStorage.getItem('token');
        // Http Options
        this.httpAuth = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token,
            })
        };
    }
    getProfile() {
        return this.http.get('/api/profile/', this.httpAuth).pipe(shareReplay({ bufferSize: 1, refCount: true }), retry(1), catchError(this.handleError));
    }
    getContactById(contactId) {
        return this.http.get('/api/contacts/' + contactId);
    }
    postLogin(login) {
        return this.http.post('/api/login/', JSON.stringify(login), this.httpOptions).pipe(retry(1), catchError(this.handleError));
    }
    postRegister(register) {
        return this.http.post('/api/register/', JSON.stringify(register), this.httpOptions).pipe(retry(1), catchError(this.handleError));
    }
    getContacts() {
        return this.http.get('/api/contacts/');
    }
    get isLoggedIn() {
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
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }
};
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient,
        Router])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map