import { __decorate, __metadata, __param } from "tslib";
import { DOCUMENT } from '@angular/common';
import { Component, Inject, ElementRef, Renderer2, HostListener } from '@angular/core';
import { ROUTES } from './sidebar-items';
let SidebarComponent = class SidebarComponent {
    constructor(document, renderer, elementRef) {
        this.document = document;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.showMenu = '';
        this.showSubMenu = '';
        this.headerHeight = 60;
        this.full_name = localStorage.getItem('first_name') + " " + localStorage.getItem('last_name');
        this.specialist = localStorage.getItem('specialist');
    }
    windowResizecall(event) {
        this.setMenuHeight();
        this.checkStatuForResize(false);
    }
    onGlobalClick(event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.renderer.removeClass(this.document.body, 'overlay-open');
        }
    }
    callMenuToggle(event, element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
        const hasClass = event.target.classList.contains('toggled');
        if (hasClass) {
            this.renderer.removeClass(event.target, 'toggled');
        }
        else {
            this.renderer.addClass(event.target, 'toggled');
        }
    }
    callSubMenuToggle(element) {
        if (element === this.showSubMenu) {
            this.showSubMenu = '0';
        }
        else {
            this.showSubMenu = element;
        }
    }
    ngOnInit() {
        this.sidebarItems = ROUTES.filter(sidebarItem => sidebarItem);
        this.initLeftSidebar();
        this.bodyTag = this.document.body;
    }
    initLeftSidebar() {
        const _this = this;
        // Set menu height
        _this.setMenuHeight();
        _this.checkStatuForResize(true);
        // Set Waves
        // Waves.attach('.menu .list a', ['waves-block']);
        // Waves.init();
    }
    setMenuHeight() {
        this.innerHeight = window.innerHeight;
        const height = this.innerHeight - this.headerHeight;
        this.listMaxHeight = height + '';
        this.listMaxWidth = '500px';
    }
    isOpen() {
        return this.bodyTag.classList.contains('overlay-open');
    }
    checkStatuForResize(firstTime) {
        if (window.innerWidth < 1170) {
            this.renderer.addClass(this.document.body, 'ls-closed');
        }
        else {
            this.renderer.removeClass(this.document.body, 'ls-closed');
        }
    }
    mouseHover(e) {
        const body = this.elementRef.nativeElement.closest('body');
        if (body.classList.contains('submenu-closed')) {
            this.renderer.addClass(this.document.body, 'side-closed-hover');
            this.renderer.removeClass(this.document.body, 'submenu-closed');
        }
    }
    mouseOut(e) {
        const body = this.elementRef.nativeElement.closest('body');
        if (body.classList.contains('side-closed-hover')) {
            this.renderer.removeClass(this.document.body, 'side-closed-hover');
            this.renderer.addClass(this.document.body, 'submenu-closed');
        }
    }
};
__decorate([
    HostListener('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SidebarComponent.prototype, "windowResizecall", null);
__decorate([
    HostListener('document:mousedown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SidebarComponent.prototype, "onGlobalClick", null);
SidebarComponent = __decorate([
    Component({
        selector: 'app-sidebar',
        templateUrl: './sidebar.component.html',
        styleUrls: ['./sidebar.component.sass']
    }),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Document,
        Renderer2,
        ElementRef])
], SidebarComponent);
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map