import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PatientRoutingModule } from './patient-routing.module';
import { AllpatientComponent } from './allpatient/allpatient.component';
import { FormDialogComponent } from './allpatient/dialog/form-dialog/form-dialog.component';
import { DeleteDialogComponent } from './allpatient/dialog/delete/delete.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { DeleteDialogPastVisitComponent } from "./patient-profile/pastvisitdialog/delete/deletepastvisit.component";
import { FormDialogPastVisitComponent } from "./patient-profile/pastvisitdialog/form-dialog/form-dialogpastvisit.component";
import { MatVideoModule } from "mat-video";
import { CameraComponent } from './camera/camera.component';
let PatientModule = class PatientModule {
};
PatientModule = __decorate([
    NgModule({
        declarations: [
            AllpatientComponent,
            FormDialogComponent,
            DeleteDialogComponent,
            AddPatientComponent,
            EditPatientComponent,
            PatientProfileComponent,
            DeleteDialogPastVisitComponent,
            FormDialogPastVisitComponent,
            CameraComponent
        ],
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            NgxDatatableModule,
            MatTableModule,
            MatPaginatorModule,
            MatFormFieldModule,
            MatInputModule,
            MatSnackBarModule,
            MatButtonModule,
            MatIconModule,
            MatDialogModule,
            MatSortModule,
            MatToolbarModule,
            MatDatepickerModule,
            MatSelectModule,
            MatRadioModule,
            MatCheckboxModule,
            MaterialFileInputModule,
            PatientRoutingModule,
            MatVideoModule,
        ],
    })
], PatientModule);
export { PatientModule };
//# sourceMappingURL=patient.module.js.map