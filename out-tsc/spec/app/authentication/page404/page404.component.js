import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
let Page404Component = class Page404Component {
    constructor() { }
    ngOnInit() {
        const loginformcenter = ($(window).height() - $('.login100-form').height()) / 2 - 34;
        $('.login100-form').css('margin-top', loginformcenter);
    }
};
Page404Component = __decorate([
    Component({
        selector: 'app-page404',
        templateUrl: './page404.component.html',
        styleUrls: ['./page404.component.scss']
    }),
    __metadata("design:paramtypes", [])
], Page404Component);
export { Page404Component };
//# sourceMappingURL=page404.component.js.map