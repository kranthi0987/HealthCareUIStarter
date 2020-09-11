import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  template: `
    <h1 mat-dialog-title>Forgot Password</h1>
    <div mat-dialog-content>
      <p>Please contact to this email to get the password <a href="mailto:admin@iconassociatess.com">@healthcareTeam</a></p>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="close()">Close</button>
    </div>
  `
})
export class ForgetPasswordDialogComponent {
  constructor(public dialogRef: MatDialogRef<ForgetPasswordDialogComponent>) {}
  close(): void {
    this.dialogRef.close();
  }
}
