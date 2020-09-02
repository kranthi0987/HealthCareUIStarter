import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AfterViewInit, Component, ElementRef, Inject, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild} from '@angular/core';
import * as RecordRTC from 'recordrtc';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import {PatientService} from "../../../allpatient/patient.service";
import {PastVisitModel} from "../../../models/PastVisitModel";
// const Stream = require('videoStream');
// import Recorder, { RecorderEvents } from "rtsp-video-recorder";
import * as assert from "assert";
import Recorder, {RecorderEvents} from "rtsp-video-recorder";
@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialogpastvisit.component.html',
  styleUrls: ['./form-dialogpastvisit.component.sass']
})

export class FormDialogPastVisitComponent implements AfterViewInit, OnInit, OnChanges {
  action: string;
  dialogTitle: string;
  patientForm: FormGroup;
  patient: PastVisitModel;
  rec: any;

  private stream: MediaStream;

  public recorder: any;
  // @ViewChild('video', {static: false}) matVideo: any;
  @ViewChild('video', { static: false }) matVideo: ElementRef<HTMLVideoElement>;
  constructor(
    public dialogRef: MatDialogRef<FormDialogPastVisitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public patientService: PatientService,
    private fb: FormBuilder,
    private renderer: Renderer2
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'view') {
      this.dialogTitle = "View Visit";
      this.patient = data.patient;
    } else {
      this.dialogTitle = 'New Visit';
      this.patient = new PastVisitModel({});
    }
    this.patientForm = this.createContactForm();
    this.recorder = new Recorder('rtsp://169.254.87.20:554/profile1', '/media/Recorder', {
      title: 'Test Camera',
    });
    // this.rec = new Recorder({
    //   url: 'rtsp://' + this.ip_address + ':554/profile1',
    //   timeLimit: 60, // time in seconds for each segmented video file
    //   folder: 'C:\\Workspace\\webstormprojects\\streaming',
    //   name: 'cam1',
    //   // type:"image"
    //   // ffmpeg -i rtsp://169.254.87.20/profile1 -c:a aac -vcodec copy C:\Workspace\webstormprojects\streaming\1.mp4
    // });
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
      log_documents: [this.patient.log_documents],
      session_log: [this.patient.session_log],
      // bGroup: [this.patient.bGroup],
      // mobile: [this.patient.mobile],
      // address: [this.patient.address],
      // treatment: [this.patient.treatment]
    });
  }

  submit() {
    // emppty stuff
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
    this.matVideo.nativeElement.muted = false;
    this.matVideo.nativeElement.controls = true;
    this.matVideo.nativeElement.autoplay = false;

  }

  toggleControls() {
    // const video: HTMLVideoElement = this.video.nativeElement;
    this.matVideo.nativeElement.muted = !this.matVideo.nativeElement.muted;
    this.matVideo.nativeElement.controls = !this.matVideo.nativeElement.controls;
    this.matVideo.nativeElement.autoplay = !this.matVideo.nativeElement.autoplay;
  }

  successCallback(stream: MediaStream) {

    const options = {
      type: 'video',
      mimeType: 'video/webm;codecs=h264', // or video/webm\;codecs=h264 or video/webm\;codecs=vp9
      audioBitsPerSecond: 128000,
      videoBitsPerSecond: 128000,
      bitsPerSecond: 128000 // if this line is provided, skip above two
    };
    this.stream = stream;
    // this.recordRTC = RecordRTC(stream, options);
    // this.recordRTC.startRecording();
    // const video: HTMLVideoElement = this.video.nativeElement;
    this.matVideo.nativeElement.srcObject = stream;
    this.toggleControls();
  }

  errorCallback() {
    // handle error here
  }

  processVideo(audioVideoWebMURL) {
    // // const video: HTMLVideoElement = this.video.nativeElement;
    // const recordRTC = this.recordRTC;
    // // this.matVideo.nativeElement.srcObject = audioVideoWebMURL;
    // try {
    //   this.matVideo.nativeElement.srcObject = audioVideoWebMURL;
    // } catch (error) {
    //   console.log(error);
    //   this.matVideo.nativeElement.src = audioVideoWebMURL;
    // }
    // console.log(audioVideoWebMURL);
    // this.toggleControls();
    // const recordedBlob = recordRTC.getBlob();
    // recordRTC.getDataURL(function(dataURL) {
    //   // console.log(dataURL);
    // });
  }

  startRecording() {
    const mediaConstraints = {
      video: true, audio: true
    };
    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));


  }


  startStreamRecording(){
    // this.recorder.on(RecorderEvents.STARTED, (payload) => {
    //   assert.equal(payload, {
    //     uri: 'rtsp://username:password@host/path',
    //     path: '/media/Recorder',
    //     title: 'Test Camera',
    //     directoryPattern: '%Y.%m.%d',
    //     filenamePattern: '%H.%M.%S',
    //     segmentTime: 600,
    //     autoClear: false,
    //     ffmpegBinary: 'ffmpeg',
    //   });
    // });
  }

  stopStreamRecording(){
    // this.recorder.stopRecording();
  }

  stopRecording() {
    // const recordRTC = this.recordRTC;
    // recordRTC.stopRecording(this.processVideo.bind(this));
    // const stream = this.stream;
    // stream.getAudioTracks().forEach(track => track.stop());
    // stream.getVideoTracks().forEach(track => track.stop());
  }

  download() {
    // this.recordRTC.save('video.webm');
  }

  ngOnInit(): void {
    // this.video = this.matVideo.getVideoTag();

    // Use Angular renderer or addEventListener to listen for standard HTML5 video events

    // this.renderer.listen(this.matVideo, 'ended', () => console.log('video ended'));
    // this.matVideo.addEventListener('ended', () => console.log('video ended'));
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (this.matVideo.src) {
    //   this.matVideo.load();
    // }
  }
}
