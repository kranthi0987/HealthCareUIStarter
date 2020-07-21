import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let IpServiceService = class IpServiceService {
    constructor(http) {
        this.http = http;
    }
};
IpServiceService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient])
], IpServiceService);
export { IpServiceService };
//# sourceMappingURL=ip-service.service.js.map