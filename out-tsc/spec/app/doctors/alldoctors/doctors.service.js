import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
let DoctorsService = class DoctorsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = '/api/patient/list/';
        this.dataChange = new BehaviorSubject([]);
    }
    get data() {
        return this.dataChange.value;
    }
    getDialogData() {
        return this.dialogData;
    }
    /** CRUD METHODS */
    getAllDoctorss() {
        this.httpClient.get(this.API_URL).subscribe(data => {
            this.dataChange.next(data);
        }, (error) => {
            console.log(error.name + ' ' + error.message);
        });
    }
    // DEMO ONLY, you can find working methods below
    addDoctors(doctors) {
        this.dialogData = doctors;
    }
    updateDoctors(doctors) {
        this.dialogData = doctors;
    }
    deleteDoctors(id) {
        console.log(id);
    }
};
DoctorsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], DoctorsService);
export { DoctorsService };
//# sourceMappingURL=doctors.service.js.map