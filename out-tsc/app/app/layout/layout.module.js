import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from "../authentication/shared/auth.service";
let LayoutModule = class LayoutModule {
};
LayoutModule = __decorate([
    NgModule({
        imports: [CommonModule],
        providers: [AuthService],
    })
], LayoutModule);
export { LayoutModule };
//# sourceMappingURL=layout.module.js.map