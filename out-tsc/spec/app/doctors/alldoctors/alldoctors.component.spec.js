import { async, TestBed } from '@angular/core/testing';
import { AlldoctorsComponent } from './alldoctors.component';
describe('AlldoctorsComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AlldoctorsComponent]
        }).compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AlldoctorsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=alldoctors.component.spec.js.map