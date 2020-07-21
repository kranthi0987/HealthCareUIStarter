import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
let AddStaffComponent = class AddStaffComponent {
    constructor(fb) {
        this.fb = fb;
        this.hide3 = true;
        this.agree3 = false;
        this.staffForm = this.fb.group({
            first: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
            last: [''],
            gender: ['', [Validators.required]],
            mobile: ['', [Validators.required]],
            password: ['', [Validators.required]],
            conformPassword: ['', [Validators.required]],
            designation: [''],
            department: [''],
            address: [''],
            email: [
                '',
                [Validators.required, Validators.email, Validators.minLength(5)]
            ],
            dob: ['', [Validators.required]],
            education: [''],
            uploadImg: ['']
        });
    }
    onSubmit() {
        console.log('Form Value', this.staffForm.value);
    }
};
AddStaffComponent = __decorate([
    Component({
        selector: 'app-add-staff',
        templateUrl: './add-staff.component.html',
        styleUrls: ['./add-staff.component.sass']
    }),
    __metadata("design:paramtypes", [FormBuilder])
], AddStaffComponent);
export { AddStaffComponent };
//# sourceMappingURL=add-staff.component.js.map