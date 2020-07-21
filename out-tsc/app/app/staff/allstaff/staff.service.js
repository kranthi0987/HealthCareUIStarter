import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
let StaffService = class StaffService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = 'assets/data/staff.json';
        this.dataChange = new BehaviorSubject([]);
    }
    get data() {
        return this.dataChange.value;
    }
    getDialogData() {
        return this.dialogData;
    }
    /** CRUD METHODS */
    getAllStaffs() {
        this.httpClient.get(this.API_URL).subscribe(data => {
            this.dataChange.next(data);
        }, (error) => {
            console.log(error.name + ' ' + error.message);
        });
    }
    // DEMO ONLY, you can find working methods below
    addStaff(staff) {
        this.dialogData = staff;
    }
    updateStaff(staff) {
        this.dialogData = staff;
    }
    deleteStaff(id) {
        console.log(id);
    }
};
StaffService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], StaffService);
export { StaffService };
//# sourceMappingURL=staff.service.js.map