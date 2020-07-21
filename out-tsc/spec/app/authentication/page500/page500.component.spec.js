import { async, TestBed } from '@angular/core/testing';
import { Page500Component } from './page500.component';
describe('Page500Component', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Page500Component]
        }).compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(Page500Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=page500.component.spec.js.map