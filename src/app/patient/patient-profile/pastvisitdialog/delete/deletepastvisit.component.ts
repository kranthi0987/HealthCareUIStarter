import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import {PatientService} from "../../../allpatient/patient.service";
@Component({
  selector: 'app-delete',
  templateUrl: './deletepastvisit.component.html',
  styleUrls: ['./deletepastvisit.component.sass']
})
export class DeleteDialogPastVisitComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogPastVisitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public patientService: PatientService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
    this.patientService.deletePatient(this.data.id);
  }
}
