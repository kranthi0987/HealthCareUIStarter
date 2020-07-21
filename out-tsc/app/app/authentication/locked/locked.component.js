import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
let LockedComponent = class LockedComponent {
    constructor(formBuilder, route, router) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.submitted = false;
        this.hide = true;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            password: ['', Validators.required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    get f() {
        return this.loginForm.controls;
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
LockedComponent = __decorate([
    Component({
        selector: 'app-locked',
        templateUrl: './locked.component.html',
        styleUrls: ['./locked.component.scss']
    }),
    __metadata("design:paramtypes", [FormBuilder,
        ActivatedRoute,
        Router])
], LockedComponent);
export { LockedComponent };
//# sourceMappingURL=locked.component.js.map