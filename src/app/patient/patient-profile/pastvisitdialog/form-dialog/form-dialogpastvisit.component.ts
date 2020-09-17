import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AfterViewInit, Component, ElementRef, Inject, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild} from '@angular/core';

import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import {PatientService} from "../../../patient.service";
import {PastVisitModel} from "../../../models/PastVisitModel";
import JSMpeg from '@cycjimmy/jsmpeg-player';
import {url} from "inspector";
import * as fileSaver from "file-saver";

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialogpastvisit.component.html',
  styleUrls: ['./form-dialogpastvisit.component.sass']
})

export class FormDialogPastVisitComponent implements AfterViewInit, OnInit {
  action: string;
  dialogTitle: string;
  patientForm: FormGroup;
  patient: PastVisitModel;
  @ViewChild('video', {static: false}) streamingcanvas: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<FormDialogPastVisitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public patientService: PatientService,
    private fb: FormBuilder,
  ) {
    // Set the defaults
    this.action = data.action;
    console.log(data.patient.id);
    if (this.action === 'view') {
      this.dialogTitle = "View Visit";
      this.patient = data.patient;
    } else {
      this.dialogTitle = 'New Visit';
      this.patient = new PastVisitModel({});
    }
    this.patientForm = this.createContactForm();
    // new JSMpeg.VideoElement(videoWrapper, videoUrl [, options] [, overlayOptions])
  }

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);


  getErrorMessage() {
    return this.formControl.hasError('required')
      ? 'Required field'
      : this.formControl.hasError('email')
        ? 'Not a valid email'
        : '';
  }

  createContactForm(): FormGroup {
    return this.fb.group({
      uuid: [this.patient.uuid],
      treatment: [this.patient.treatment],
      consulted_on: [this.patient.consulted_on],
      // log_documents: [this.patient.log_documents],
      session_log: [this.patient.session_log],
      streamfilepath: [this.patient.session_log]
      // bGroup: [this.patient.bGroup],
      // mobile: [this.patient.mobile],
      // address: [this.patient.address],
      // treatment: [this.patient.treatment]
    });
  }

  submit() {
    // emppty stuff
    this.dialogRef.close();
    var streampath = this.patientForm.get('streamfilepath').value;
    var splited = streampath.split("/");
    console.log(splited);
    const formData: any = new FormData();
    formData.append("treatment", this.patientForm.get('treatment').value);
    formData.append("patient_id", this.data.patient.id);
    formData.append("session_log", this.patientForm.get('streamfilepath').value);
    const submitpastVisit = this.patientService.addPatientPastVisits(formData);
    submitpastVisit.subscribe(value => {
      console.log(value);
    }, error => {
      console.log(error);
    }, () => {
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    this.patientService.addPatient(this.patientForm.getRawValue());
  }

  ngAfterViewInit(): void {
    // set the initial state of the video
    // const matVideo: HTMLVideoElement = this.matVideo.nativeElement;
    // this.matVideo.nativeElement.muted = false;
    // this.matVideo.nativeElement.controls = true;
    // this.matVideo.nativeElement.autoplay = false;

  }

  toggleControls() {
    // const video: HTMLVideoElement = this.video.nativeElement;
    // this.matVideo.nativeElement.muted = !this.matVideo.nativeElement.muted;
    // this.matVideo.nativeElement.controls = !this.matVideo.nativeElement.controls;
    // this.matVideo.nativeElement.autoplay = !this.matVideo.nativeElement.autoplay;
  }

  successCallback(stream: MediaStream) {
  }

  errorCallback() {
    // handle error here
  }

  processVideo(audioVideoWebMURL) {
  }


  startStreamRecording() {
    const startObservable = this.patientService.startStreaming();
    startObservable.subscribe(value => {
      console.log(value);
      this.patientForm.get("streamfilepath").setValue(value.path);
    }, error => {
      console.log(error);
    }, () => {
      console.log("recording started");
    });
    const player = new JSMpeg.Player('ws://127.0.0.1:9999', {canvas: this.streamingcanvas.nativeElement, autoplay: true, loop: true});
  }

  stopStreamRecording() {
    const stopObservable = this.patientService.stopStreaming();
    stopObservable.subscribe(value => {
      console.log(value.path);
      this.patientForm.get("streamfilepath").setValue(value.path);
    }, error => {
      console.log(error);
    }, () => {
    });
    this.streamingcanvas.nativeElement = null;
  }

  download() {
    const downloadStreaming = this.patientService.downloadStreaming();
    downloadStreaming.subscribe(response => {
        const blob: any = new Blob([response], {type: 'blob'});
        const url = window.URL.createObjectURL(blob);
        // window.open(url);
        // window.location.href = response.url;
        fileSaver.saveAs(blob, 'recorder.mp4');
      }, error => console.log('Error downloading the file'),
      () => console.info('File downloaded successfully')
      // this.recordRTC.save('video.webm');
    );
  }

  ngOnInit(): void {

  }
}
