import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
let EditStaffComponent = class EditStaffComponent {
    constructor(fb) {
        this.fb = fb;
        this.formdata = {
            first: 'Pooja',
            last: 'Sarma',
            gender: 'Female',
            mobile: '123456789',
            password: '123',
            conformPassword: '123',
            email: 'test@example.com',
            designation: 'Sr. Doctor',
            department: '2',
            address: '101, Elanxa, New Yourk',
            dob: '1987-02-17T14:22:18Z',
            education: 'M.B.B.S.'
        };
        this.staffForm = this.createContactForm();
    }
    onSubmit() {
        console.log('Form Value', this.staffForm.value);
    }
    createContactForm() {
        return this.fb.group({
            first: [
                this.formdata.first,
                [Validators.required, Validators.pattern('[a-zA-Z]+')]
            ],
            last: [this.formdata.last],
            gender: [this.formdata.gender, [Validators.required]],
            mobile: [this.formdata.mobile, [Validators.required]],
            password: [this.formdata.password],
            conformPassword: [this.formdata.conformPassword],
            email: [
                this.formdata.email,
                [Validators.required, Validators.email, Validators.minLength(5)]
            ],
            designation: [this.formdata.designation],
            department: [this.formdata.department],
            address: [this.formdata.address],
            dob: [this.formdata.dob, [Validators.required]],
            education: [this.formdata.education]
        });
    }
};
EditStaffComponent = __decorate([
    Component({
        selector: 'app-edit-staff',
        templateUrl: './edit-staff.component.html',
        styleUrls: ['./edit-staff.component.sass']
    }),
    __metadata("design:paramtypes", [FormBuilder])
], EditStaffComponent);
export { EditStaffComponent };
//# sourceMappingURL=edit-staff.component.js.map