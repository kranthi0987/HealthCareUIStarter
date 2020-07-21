import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from "../shared/auth.service";
let SigninComponent = class SigninComponent {
    constructor(formBuilder, route, router, authService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.loginRequest = { email: '', password: '' };
        this.submitted = false;
        this.hide = true;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    get f() {
        return this.loginForm.controls;
    }
    loginApiCall(loginRequest) {
        const loginObservable = this.authService.postLogin(loginRequest);
        loginObservable.subscribe((loginResponse) => {
            this.loginReponse = loginResponse;
            localStorage.setItem('token', loginResponse.token);
        }, (err) => {
            console.log(err);
        }, () => {
            this.router.navigate(['/dashboard']);
        });
    }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        else {
            this.router.navigate(['/dashboard/main']);
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], SigninComponent.prototype, "loginRequest", void 0);
SigninComponent = __decorate([
    Component({
        selector: 'app-signin',
        templateUrl: './signin.component.html',
        styleUrls: ['./signin.component.scss']
    }),
    __metadata("design:paramtypes", [FormBuilder,
        ActivatedRoute,
        Router,
        AuthService])
], SigninComponent);
export { SigninComponent };
//# sourceMappingURL=signin.component.js.map