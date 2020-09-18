import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {PatientService} from "../../../patient.service";

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
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    const deleteObservable = this.patientService.deletePatientPastVisits(this.data.id);
    deleteObservable.subscribe(value => {
    }, error => {
    }, () => {
    });
  }
}
