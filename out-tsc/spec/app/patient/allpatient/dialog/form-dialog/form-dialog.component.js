import { __decorate, __metadata, __param } from "tslib";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { PatientService } from '../../patient.service';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Patient } from '../../patient.model';
let FormDialogComponent = class FormDialogComponent {
    constructor(dialogRef, data, patientService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.patientService = patientService;
        this.fb = fb;
        this.formControl = new FormControl('', [
            Validators.required
            // Validators.email,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = data.patient.name;
            this.patient = data.patient;
        }
        else {
            this.dialogTitle = 'New Patient';
            this.patient = new Patient({});
        }
        this.patientForm = this.createContactForm();
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
            id: [this.patient.id],
            img: [this.patient.img],
            name: [this.patient.name],
            gender: [this.patient.gender],
            date: [this.patient.date],
            bGroup: [this.patient.bGroup],
            mobile: [this.patient.mobile],
            address: [this.patient.address],
            treatment: [this.patient.treatment]
        });
    }
    submit() {
        // emppty stuff
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmAdd() {
        this.patientService.addPatient(this.patientForm.getRawValue());
    }
};
FormDialogComponent = __decorate([
    Component({
        selector: 'app-form-dialog',
        templateUrl: './form-dialog.component.html',
        styleUrls: ['./form-dialog.component.sass']
    }),
    __param(1, Inject(MAT_DIALOG_DATA)),
    __metadata("design:paramtypes", [MatDialogRef, Object, PatientService,
        FormBuilder])
], FormDialogComponent);
export { FormDialogComponent };
//# sourceMappingURL=form-dialog.component.js.map