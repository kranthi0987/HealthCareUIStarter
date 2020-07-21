import { __decorate, __metadata, __param } from "tslib";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { StaffService } from '../../staff.service';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Staff } from '../../staff.model';
import { formatDate } from '@angular/common';
let FormDialogComponent = class FormDialogComponent {
    constructor(dialogRef, data, staffService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.staffService = staffService;
        this.fb = fb;
        this.formControl = new FormControl('', [
            Validators.required
            // Validators.email,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = data.staff.name;
            this.staff = data.staff;
        }
        else {
            this.dialogTitle = 'New Staff';
            this.staff = new Staff({});
        }
        this.staffForm = this.createContactForm();
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
            id: [this.staff.id],
            img: [this.staff.img],
            name: [this.staff.name],
            email: [this.staff.email],
            date: [
                formatDate(this.staff.date, 'yyyy-MM-dd', 'en'),
                [Validators.required]
            ],
            designation: [this.staff.designation],
            address: [this.staff.address],
            mobile: [this.staff.mobile]
        });
    }
    submit() {
        // emppty stuff
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmAdd() {
        this.staffService.addStaff(this.staffForm.getRawValue());
    }
};
FormDialogComponent = __decorate([
    Component({
        selector: 'app-form-dialog',
        templateUrl: './form-dialog.component.html',
        styleUrls: ['./form-dialog.component.sass']
    }),
    __param(1, Inject(MAT_DIALOG_DATA)),
    __metadata("design:paramtypes", [MatDialogRef, Object, StaffService,
        FormBuilder])
], FormDialogComponent);
export { FormDialogComponent };
//# sourceMappingURL=form-dialog.component.js.map