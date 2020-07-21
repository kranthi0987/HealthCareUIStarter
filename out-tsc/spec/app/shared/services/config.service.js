import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
let ConfigService = class ConfigService {
    constructor() {
        this.setConfigData();
    }
    setConfigData() {
        this.configData = {
            layout: {
                variant: 'light',
                theme_color: 'white',
                logo_bg_color: 'white',
                sidebar: {
                    collapsed: false,
                    backgroundColor: 'light',
                }
            }
        };
    }
};
ConfigService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], ConfigService);
export { ConfigService };
//# sourceMappingURL=config.service.js.map