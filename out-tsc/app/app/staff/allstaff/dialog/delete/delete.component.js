import { __decorate, __metadata, __param } from "tslib";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { StaffService } from '../../staff.service';
let DeleteDialogComponent = class DeleteDialogComponent {
    constructor(dialogRef, data, staffService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.staffService = staffService;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmDelete() {
        this.staffService.deleteStaff(this.data.id);
    }
};
DeleteDialogComponent = __decorate([
    Component({
        selector: 'app-delete',
        templateUrl: './delete.component.html',
        styleUrls: ['./delete.component.sass']
    }),
    __param(1, Inject(MAT_DIALOG_DATA)),
    __metadata("design:paramtypes", [MatDialogRef, Object, StaffService])
], DeleteDialogComponent);
export { DeleteDialogComponent };
//# sourceMappingURL=delete.component.js.map