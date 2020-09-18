import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PatientService} from "../patient.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {PastVisitModel} from "../models/PastVisitModel";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DeleteDialogPastVisitComponent} from "./pastvisitdialog/delete/deletepastvisit.component";
import {FormDialogPastVisitComponent} from "./pastvisitdialog/form-dialog/form-dialogpastvisit.component";

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.sass']
})
export class PatientProfileComponent implements OnInit {

  patient: any;
  displayedColumns: string[] = ['consultedon', 'treatment', 'sessionfile', 'delete', 'details'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  dataSource: MatTableDataSource<PastVisitModel>;
  private id: any;


  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        console.log(params);
        this.getPatientDataWithData(params['id']);
        this.getPatientPastvisitsbyid(params['id']);
      }
    );
  }

  public getPatientDataWithData(patientId: number): void {
    const patientObservable = this.patientService.getPatient(patientId);
    patientObservable.subscribe((response) => {
      console.log(response);
      this.patient = response;
    }, (err) => {
    }, () => {
    });
  }

  public getPatientPastvisitsbyid(patientId: number): void {
    console.log('Form Value', patientId);
    const formData: any = new FormData();
    formData.append("patient_id", patientId);
    const patientObservable = this.patientService.getPatientPastVisits(formData);
    patientObservable.subscribe((response) => {
      console.log(response);
      this.dataSource = new MatTableDataSource<PastVisitModel>(response);
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


  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }
  public getAge(date: any): string {
    const timeDiff = Math.abs(Date.now() - new Date(date).getTime());
    const age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    return age.toString();
  }

  public addNewVisit() {
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
        this.patientService.dataChange.value.unshift(
          this.patientService.getDialogData()
        );
        this.refreshTable();
        this.showNotification(
          'snackbar-success',
          'Add Record Successfully...!!!',
          'bottom',
          'center'
        );
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

  redirectToDetails(id: any, element: any) {
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
        const foundIndex = this.patientService.dataChange.value.findIndex(
          (x) => x.id === this.id
        );
        // Then you update that record using data from dialogData (values you enetered)
        this.patientService.dataChange.value[
          foundIndex
          ] = this.patientService.getDialogData();
        // And lastly refresh table
        this.refreshTable();
        this.showNotification(
          'black',
          'Edit Record Successfully...!!!',
          'bottom',
          'center'
        );
      }
    });
  }

  redirectToDelete(id: any, element: any) {
    console.log(id);
    // this.index = i;
    this.id = element.id;
    const dialogRef = this.dialog.open(DeleteDialogPastVisitComponent, {
      data: element,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        const foundIndex = this.patientService.dataChange.value.findIndex(
          (x) => x.id === this.id
        );
        // for delete we use splice in order to remove single object from DataService
        // this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
        this.refreshTable();
        this.showNotification(
          'snackbar-danger',
          'Delete Record Successfully...!!!',
          'bottom',
          'center'
        );
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
}
