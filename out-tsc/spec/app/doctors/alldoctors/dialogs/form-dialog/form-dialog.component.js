import { __decorate, __metadata, __param } from "tslib";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { DoctorsService } from '../../doctors.service';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Doctors } from '../../doctors.model';
import { formatDate } from '@angular/common';
let FormDialogComponent = class FormDialogComponent {
    constructor(dialogRef, data, doctorsService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.doctorsService = doctorsService;
        this.fb = fb;
        this.formControl = new FormControl('', [
            Validators.required
            // Validators.email,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = data.doctors.name;
            this.doctors = data.doctors;
        }
        else {
            this.dialogTitle = 'New Doctors';
            this.doctors = new Doctors({});
        }
        this.doctorsForm = this.createContactForm();
    }
    getErrorMessage() {
        return this.formControl.hasError('required')
            ? 'Required field'
            : this.formControl.hasError('email')
                ? 'Not a valid email'
                : '';
    }
    createContactForm() {
        return this.fb.group({
            id: [this.doctors.id],
            img: [this.doctors.img],
            name: [this.doctors.name],
            email: [this.doctors.email],
            date: [
                formatDate(this.doctors.date, 'yyyy-MM-dd', 'en'),
                [Validators.required]
            ],
            specialization: [this.doctors.specialization],
            mobile: [this.doctors.mobile],
            department: [this.doctors.department],
            degree: [this.doctors.degree]
        });
    }
    submit() {
        // emppty stuff
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmAdd() {
        this.doctorsService.addDoctors(this.doctorsForm.getRawValue());
    }
};
FormDialogComponent = __decorate([
    Component({
        selector: 'app-form-dialog',
        templateUrl: './form-dialog.component.html',
        styleUrls: ['./form-dialog.component.sass']
    }),
    __param(1, Inject(MAT_DIALOG_DATA)),
    __metadata("design:paramtypes", [MatDialogRef, Object, DoctorsService,
        FormBuilder])
], FormDialogComponent);
export { FormDialogComponent };
//# sourceMappingURL=form-dialog.component.js.map