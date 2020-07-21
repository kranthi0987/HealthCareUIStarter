import { __decorate, __metadata, __param } from "tslib";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { PatientService } from "../../../allpatient/patient.service";
let DeleteDialogPastVisitComponent = class DeleteDialogPastVisitComponent {
    constructor(dialogRef, data, patientService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.patientService = patientService;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmDelete() {
        this.patientService.deletePatient(this.data.id);
    }
};
DeleteDialogPastVisitComponent = __decorate([
    Component({
        selector: 'app-delete',
        templateUrl: './deletepastvisit.component.html',
        styleUrls: ['./deletepastvisit.component.sass']
    }),
    __param(1, Inject(MAT_DIALOG_DATA)),
    __metadata("design:paramtypes", [MatDialogRef, Object, PatientService])
], DeleteDialogPastVisitComponent);
export { DeleteDialogPastVisitComponent };
//# sourceMappingURL=deletepastvisit.component.js.map