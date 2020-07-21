import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.authService.isLoggedIn !== true) {
            window.alert('Access not allowed!');
            this.router.navigate(['/auth/login']);
        }
        return true;
    }
};
AuthGuard = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [AuthService,
        Router])
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map