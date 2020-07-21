import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let RightSidebarService = class RightSidebarService {
    constructor() {
        this.statusService = new BehaviorSubject(false);
        this.currentStatus = this.statusService.asObservable();
    }
    changeMsg(msg) {
        this.statusService.next(msg);
    }
};
RightSidebarService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], RightSidebarService);
export { RightSidebarService };
//# sourceMappingURL=rightsidebar.service.js.map