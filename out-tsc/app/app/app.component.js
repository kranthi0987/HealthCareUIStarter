import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { PlatformLocation } from '@angular/common';
let AppComponent = class AppComponent {
    constructor(_router, location, spinner) {
        this._router = _router;
        this.spinner = spinner;
        this._router.events.subscribe((routerEvent) => {
            if (routerEvent instanceof NavigationStart) {
                this.spinner.show();
                location.onPopState(() => {
                    window.location.reload();
                });
                this.currentUrl = routerEvent.url.substring(routerEvent.url.lastIndexOf('/') + 1);
            }
            if (routerEvent instanceof NavigationEnd) {
                this.spinner.hide();
            }
            window.scrollTo(0, 0);
        });
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    }),
    __metadata("design:paramtypes", [Router, PlatformLocation, NgxSpinnerService])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map