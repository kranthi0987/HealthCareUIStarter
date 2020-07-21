import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
let AddDoctorComponent = class AddDoctorComponent {
    constructor(fb) {
        this.fb = fb;
        this.hide3 = true;
        this.agree3 = false;
        this.docForm = this.fb.group({
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
        console.log('Form Value', this.docForm.value);
    }
};
AddDoctorComponent = __decorate([
    Component({
        selector: 'app-add-doctor',
        templateUrl: './add-doctor.component.html',
        styleUrls: ['./add-doctor.component.sass']
    }),
    __metadata("design:paramtypes", [FormBuilder])
], AddDoctorComponent);
export { AddDoctorComponent };
//# sourceMappingURL=add-doctor.component.js.map