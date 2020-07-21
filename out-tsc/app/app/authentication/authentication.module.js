import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from "./shared/auth.service";
import { LockedComponent } from "./locked/locked.component";
import { Page404Component } from "./page404/page404.component";
import { Page500Component } from "./page500/page500.component";
let AuthenticationModule = class AuthenticationModule {
};
AuthenticationModule = __decorate([
    NgModule({
        declarations: [SigninComponent, SignupComponent, LockedComponent, Page500Component,
            Page404Component],
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            AuthenticationRoutingModule,
            MatFormFieldModule,
            MatInputModule,
            MatIconModule,
            MatButtonModule
        ],
        providers: [AuthService],
    })
], AuthenticationModule);
export { AuthenticationModule };
//# sourceMappingURL=authentication.module.js.map