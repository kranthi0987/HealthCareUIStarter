import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PatientService } from "../allpatient/patient.service";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { DeleteDialogPastVisitComponent } from "./pastvisitdialog/delete/deletepastvisit.component";
import { FormDialogPastVisitComponent } from "./pastvisitdialog/form-dialog/form-dialogpastvisit.component";
let PatientProfileComponent = class PatientProfileComponent {
    constructor(route, patientService, dialog, snackBar) {
        this.route = route;
        this.patientService = patientService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.displayedColumns = ['consultedon', 'treatment', 'logdocument', 'sessionfile', 'delete', 'details'];
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            console.log(params);
            this.getPatientDataWithData(params['id']);
            this.getPatientPastvisitsbyid(params['id']);
        });
    }
    getPatientDataWithData(patientId) {
        const patientObservable = this.patientService.getPatient(patientId);
        patientObservable.subscribe((response) => {
            console.log(response);
            this.patient = response;
        }, (err) => {
        }, () => {
        });
    }
    getPatientPastvisitsbyid(patientId) {
        console.log('Form Value', patientId);
        const formData = new FormData();
        formData.append("patient_id", patientId);
        const patientObservable = this.patientService.getPatientPastVisits(formData);
        patientObservable.subscribe((response) => {
            console.log(response);
            this.dataSource = new MatTableDataSource(response);
            // Assign the paginator *after* dataSource is set
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }, (err) => {
        }, () => {
        });
    }
    refresh() {
        // this.loadData();
    }
    refreshTable() {
        this.paginator._changePageSize(this.paginator.pageSize);
    }
    addNewVisit() {
        const dialogRef = this.dialog.open(FormDialogPastVisitComponent, {
            data: {
                patient: this.patient,
                action: 'add',
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                // After dialog is closed we're doing frontend updates
                // For add we're just pushing a new row inside DataService
                this.patientService.dataChange.value.unshift(this.patientService.getDialogData());
                this.refreshTable();
                this.showNotification('snackbar-success', 'Add Record Successfully...!!!', 'bottom', 'center');
            }
        });
        // const formData: any = new FormData();
        // // formData.append("patient_id", patientId);
        // const patientObservable = this.patientService.postPatientPastVisits(formData);
        // patientObservable.subscribe((response) => {
        //   console.log(response);
        // }, (err) => {
        // }, () => {
        // });
    }
    redirectToDetails(id, element) {
        console.log(id);
        // this.id = row.id;
        const dialogRef = this.dialog.open(FormDialogPastVisitComponent, {
            data: {
                patient: element,
                action: 'view',
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                // When using an edit things are little different, firstly we find record inside DataService by id
                const foundIndex = this.patientService.dataChange.value.findIndex((x) => x.id === this.id);
                // Then you update that record using data from dialogData (values you enetered)
                this.patientService.dataChange.value[foundIndex] = this.patientService.getDialogData();
                // And lastly refresh table
                this.refreshTable();
                this.showNotification('black', 'Edit Record Successfully...!!!', 'bottom', 'center');
            }
        });
    }
    redirectToDelete(id, element) {
        console.log(id);
        // this.index = i;
        this.id = element.id;
        const dialogRef = this.dialog.open(DeleteDialogPastVisitComponent, {
            data: element,
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                const foundIndex = this.patientService.dataChange.value.findIndex((x) => x.id === this.id);
                // for delete we use splice in order to remove single object from DataService
                // this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
                this.refreshTable();
                this.showNotification('snackbar-danger', 'Delete Record Successfully...!!!', 'bottom', 'center');
            }
        });
    }
    showNotification(colorName, text, placementFrom, placementAlign) {
        this.snackBar.open(text, '', {
            duration: 2000,
            verticalPosition: placementFrom,
            horizontalPosition: placementAlign,
            panelClass: colorName,
        });
    }
};
__decorate([
    ViewChild(MatPaginator, { static: true }),
    __metadata("design:type", MatPaginator)
], PatientProfileComponent.prototype, "paginator", void 0);
__decorate([
    ViewChild(MatSort, { static: true }),
    __metadata("design:type", MatSort)
], PatientProfileComponent.prototype, "sort", void 0);
PatientProfileComponent = __decorate([
    Component({
        selector: 'app-patient-profile',
        templateUrl: './patient-profile.component.html',
        styleUrls: ['./patient-profile.component.sass']
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        PatientService,
        MatDialog,
        MatSnackBar])
], PatientProfileComponent);
export { PatientProfileComponent };
//# sourceMappingURL=patient-profile.component.js.map