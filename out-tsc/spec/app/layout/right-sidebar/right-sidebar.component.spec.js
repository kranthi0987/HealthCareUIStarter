import { async, TestBed } from '@angular/core/testing';
import { RightSidebarComponent } from './right-sidebar.component';
describe('RightSidebarComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RightSidebarComponent]
        }).compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(RightSidebarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=right-sidebar.component.spec.js.map