import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
let Page500Component = class Page500Component {
    constructor() { }
    ngOnInit() {
        const loginformcenter = ($(window).height() - $('.login100-form').height()) / 2 - 34;
        $('.login100-form').css('margin-top', loginformcenter);
    }
};
Page500Component = __decorate([
    Component({
        selector: 'app-page500',
        templateUrl: './page500.component.html',
        styleUrls: ['./page500.component.scss']
    }),
    __metadata("design:paramtypes", [])
], Page500Component);
export { Page500Component };
//# sourceMappingURL=page500.component.js.map